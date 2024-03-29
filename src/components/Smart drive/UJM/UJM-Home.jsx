import { useEffect, useState } from "react";
import { CardUi } from "../../card/card-ui"
import {BottomNavigation} from '../../bottom navigation/bottom-navigation';
import { NavLink } from "react-router-dom";
import smartReg from '../../card/img/smart-reg.png';
import smartProg from '../../card/img/smart-progress.png';
import smartRating from '../../card/img/smart-rating.png';
import smartHistory from '../../card/img/smart-history.png';
import smartHelp from '../../card/img/smart-help.png';
import smartNotif from '../../card/img/smart-notif.png';
import smartVideo from '../../video/reg2.mp4';
import {MainArea} from '../../area/job area/main-area';

import { Player } from "@lottiefiles/react-lottie-player";
import trans from '../../area/project area/trans_test.json';
import Header from "../../../lib/header";
import { StateBanner } from "../../banner/banner";

import ujmImg from '../../banner/img banner/UJM-Back.jpg';
import smartHome from '../../banner/img banner/UJM-Home.png';
import { TextAreaVert3, TextAreaVert2 } from "../../area/text-area-vert";

export const UJMHome = () => {

    const [proj, setProj] = useState({
        active: null,
        objects: [{id: 1}, {id: 2}, {id: 3}]
    })

    function toggleHover(index) {
        return setProj({...proj, active: proj.objects[index]})
    }

    function toggleDisHover() {
        return setProj({...proj, active: null})
    }

    function lottieActive(index) {
        if (proj.objects[index] === proj.active) {
            return LottieProj(index)
        }
    }

    const banner = new StateBanner(
        'Smart drive',
        'Карта пути пользователя',
        'внутри продукта',
        ujmImg,
        smartHome,
        'smartImgUJM'
    )

    function LottieProj(index) {
        return (
            <div className="lottie_card_smart">
                <Player
                    autoplay={true}
                    loop={false} 
                    src={trans}
                    speed={0.8}
                    direction={1}
                />
            </div>
        )
    }

    const title = [
        'Регистрация',
        'Прогресс вождения',
        'История вождения',
    ]

    const subTitle = [
        'Оформление договора BRX',
        'График, критерии вождения',
        'Список поездок',
    ]

    const img = [
        smartReg,
        smartProg,
        smartHistory,
    ]

    const classN = [
        "smart-reg",
        "smart-progress",
        "smart-second",
        "smart-second",
        "smart-reg",
        "smart-reg",
    ]

    const hrefUJM = [
        '/smart-drive/ujm/reg',
        '/smart-drive/ujm/progress',
        '/smart-drive/ujm/history',
    ]


    return (
        <div className="container">
        <Header />
            <div className="main">
            <div className="container_main-1">
                {banner.StateDots()}
                <div className="sub_cont">
                    <p className='title_cont_smart'>Точки взаимодействия</p>
                    <div className="smart-card-main">
                        {proj.objects.map((obj, index) => (
                            <NavLink to={hrefUJM[index]} style={{textDecoration: 'none'}}>
                                <div 
                                    className="smart-card-hidden"
                                    onMouseEnter={() => toggleHover(index)}
                                    onMouseLeave={() => toggleDisHover()}
                                >
                                    <CardUi 
                                        title={title[index]}
                                        subTitle={subTitle[index]}
                                        img={img[index]}
                                        classN={classN[index]}
                                    />
                                    {lottieActive(index)}
                            </div>
                        </NavLink>
                    ))}
                    </div>
                </div>
                <MainArea 
                    name={'Описание'} 
                    title={'Метод'} 
                    subTitle={'Карта пользователя Smart drive была унаследована из FigJam и представляет собой анализ основного пути пользователя на всех точках взаимодействия. Я сделал большой акцент в сторону эмоций при взаимодействии с интерфейсом, так как функционал приложения повторяет старую версию без обновленного UI.'} 
                    title2={'Опыт'} 
                    subTitle2={'В моем тестировании участвовало 2 человека из целевой аудитории, поэтому я объединил их в одну карту. Так как в центре UJM находится опыт пользователя, все тесты я проводил на прототипах, созданных на фреймворке flutter.'} 
                    video={smartVideo}
                    figarea={true}
                    linkFigma={'https://www.figma.com/file/KqSP2KCkcgf5dmwGOheM7M/Smart-drive?type=design&node-id=293-564&mode=design'}
                    linkFigjam={'https://www.figma.com/file/HXQxQIc5bqHH9rU51EsryI/Smart-drive-UJM?type=whiteboard&node-id=0%3A1&t=cZEzRnD6GO18kd3E-1'}
                />
                <BottomNavigation 
                    subTitleP={'Вернуться в меню'} 
                    subTitleB={'Smart drive'} 
                    subTitleP2={'Перейти к '} 
                    subTitleB2={'User Flow'}
                    enter={'/smart-drive'}
                    back={'/smart-drive/userflow'}
                />
            </div>
        </div>
        </div>
    )
}