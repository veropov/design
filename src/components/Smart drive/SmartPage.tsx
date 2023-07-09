import { useState } from "react"
import Header from "../../lib/header"
import { SmartUxAreaUJM } from "./SmartUX"
import trans from '../area/project area/trans_test.json';
import { Player} from '@lottiefiles/react-lottie-player';
import { SmartUJM, SmartUserFlow, SmartUserStories } from "./style/smart-svg";
import { StateBanner } from "../banner/banner";
import driveImg from '../banner/img banner/Smart-drive.jpg';
import smartHome from '../banner/img banner/Smart-Home.png';
import { SmartUxAreaUI } from "./UI/SmartUI";
import driveUI from './style/img/Smart-UI.png';

export const SmartUxArea = () => {

    const img = [
        <SmartUJM />,
        <SmartUserFlow />,
        <SmartUserStories />
    ];

    const title = [
        'User Journey Map',
        'User Flow',
        'User Story',
    ];

    const subTitle = [
        'Карта пути пользователя внутри продукта',
        'Визуальное представление пути пользователя',
        'Ожидания пользователя от продукта',
    ];

    const bottomText = [
        'Анализ эмоций и действий пользователя в процессе его работы с интерфейсом',
        'Cхема действий, которые совершает пользователь для достижения своей цели',
        'Описание, что должно быть в интерфейсе, чтобы удовлетворить потребности пользователя',
    ];

    const [proj, setProj] = useState({
        active: null,
        objects: [{id: 1}, {id: 2}, {id: 3}]
    })
    
    function toggleHover(index: any) {
        return setProj({...proj, active: proj.objects[index] as any})
    }

    function toggleDisHover() {
        return setProj({...proj, active: null})
    }

    function lottieActive(index: any) {
        if (proj.objects[index] === proj.active) {
            return LottieProj(index)
        }
    }
    
    function LottieProj(index: any) {
        return (
            <div className="lottie_smart">
                <Player
                    autoplay={true}
                    loop={false} 
                    src={trans}
                    speed={0.6}
                    direction={1}
                />
            </div>
        )
    }

    const [projUI, setProjUI] = useState(false)

    function LottieUI() {
        if (projUI === true) {
            return (
                <div className="lottie_smart_ui">
                    <Player
                        autoplay={true}
                        loop={false} 
                        src={trans}
                        speed={0.6}
                        direction={1}
                    />
                </div>
            )
        } else return null;
    }

    const banner = new StateBanner(
        'Smart drive',
        'Приложение, позволяющее cократить ',
        'расходы на оформление ОСАГО',
        driveImg,
        smartHome,
        'smartImg'
    )

    return (
        <div className="container">
            <Header />
            <div className="main">
            <div className="container_main-1">
                {banner.StateDots()}
                    <div className="sub_cont_smart">
                        <div className="sub_cont">
                            <p className='title_cont_smart'>Исследования</p>
                            <div className="Smart-ux-container">
                            {proj.objects.map((elem, index) => (
                                <div className="Smart-ux-area-main"
                                    onMouseEnter={() => toggleHover(index)}
                                    onMouseLeave={() => toggleDisHover()}
                                >
                                    <SmartUxAreaUJM 
                                        img={img[index]}
                                        title={title[index]}
                                        subTitle={subTitle[index]}
                                        bottomText={bottomText[index]}
                                    />
                                    {lottieActive(index)}
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="sub_cont">
                        <p className='title_cont_smart'>Интерфейс</p>
                            <div className="Smart-ui-container">
                                <div className="Smart-ui-area-main"
                                        onMouseEnter={() => setProjUI(true)}
                                        onMouseLeave={() => setProjUI(false)}
                                    >
                                    <SmartUxAreaUI
                                        title='User Interface (UI)'
                                        bottomText='Правила оформления сайта: сочетания цветов, шрифты, отступы, иконки и кнопки'
                                        image={driveUI}
                                    />
                                    {LottieUI()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}