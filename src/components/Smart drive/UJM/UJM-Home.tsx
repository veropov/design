import { useState } from "react";
import { CardUi } from "../../card/card-ui"
import smartReg from '../../card/img/smart-reg.png';
import { Player } from "@lottiefiles/react-lottie-player";
import trans from '../../area/project area/trans_test.json';
import Header from "../../../lib/header";
import { StateBanner } from "../../banner/banner";

import ujmImg from '../../banner/img banner/UJM-Back.jpg';
import smartHome from '../../banner/img banner/UJM-Home.png';

export const UJMHome = () => {

    const [proj, setProj] = useState({
        active: null,
        objects: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]
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

    const banner = new StateBanner(
        'Smart drive',
        'Приложение, позволяющее cократить ',
        'расходы на оформление ОСАГО',
        ujmImg,
        smartHome,
        'smartImg'
    )

    function LottieProj(index: any) {
        return (
            <div className="lottie_card_smart">
                <Player
                    autoplay={true}
                    loop={true} 
                    src={trans}
                    speed={0.6}
                    direction={1}
                />
            </div>
        )
    }

    const title = [
        'Регистрация',
        'Прогресс вождения',
        'История вождения',
        'Рейтинг автомобилистов',
        'Уведомления',
        'Профиль',
    ]

    const subTitle = [
        'Оформление договора BRX',
        'Оформление договора BRX',
        'Оформление договора BRX',
        'Оформление договора BRX',
        'Оформление договора BRX',
        'Оформление договора BRX',
    ]

    const img = [
        smartReg,
        smartReg,
        smartReg,
        smartReg,
        smartReg,
        smartReg,
    ]


    return (
        <div className="container">
        <Header />
            <div className="main">
            <div className="container_main-1">
                {banner.StateDots()}
                    <div className="smart-card-main">
                        {proj.objects.map((obj, index) => (
                            <div 
                                className="smart-card-hidden"
                                onMouseEnter={() => toggleHover(index)}
                                onMouseLeave={() => toggleDisHover()}
                            >

                                <CardUi 
                                    title={title[index]}
                                    subTitle={subTitle[index]}
                                    img={img[index]}
                                />
                                {lottieActive(index)}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}