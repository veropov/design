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

import { Player } from "@lottiefiles/react-lottie-player";
import trans from '../../area/project area/trans_test.json';
import Header from "../../../lib/header";
import { StateBanner } from "../../banner/banner";

import ujmImg from '../../banner/img banner/UJM-Back.jpg';
import smartHome from '../../banner/img banner/UJM-Home.png';
import { TextAreaVert3 } from "../../area/text-area-vert";

export const UJMHome = () => {

    const [proj, setProj] = useState({
        active: null,
        objects: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]
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
        'Приложение, позволяющее cократить ',
        'расходы на оформление ОСАГО',
        ujmImg,
        smartHome,
        'smartImg'
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
        'Поддержка',
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
        smartProg,
        smartHistory,
        smartHelp,
        smartNotif,
        smartReg,
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
        '/smart-drive/ujm/reg',
        '/smart-drive/ujm/reg',
        '/smart-drive/ujm/reg',
        '/smart-drive/ujm/reg',
        '/smart-drive/ujm/reg',
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
                <TextAreaVert3 
                        name={'Описание'} 
                        title={'Метод'} 
                        subTitle={'Карта пользователя Smart drive была унаследована из FigJam и представляет собой анализ основного пути пользователя на всех точках взаимодействия. Я сделал большой акцент в сторону эмоций при взаимодействии с интерфейсом, так как функционал приложения повторяет старую версию без обновленного UI.'} 
                        title2={'Опыт'} 
                        subTitle2={'В моем тестировании участвовало 2 человека из целевой аудитории, поэтому я объединил их в одну карту. Так как в центре UJM находится опыт пользователя, все тесты я проводил на прототипах, созданных на фреймворке flutter. '} 
                        title3={'Целевая аудитория'} 
                        subTitle3={'В моем тестировании участвовало 2 человека из целевой аудитории, поэтому я объединил их в одну карту. Так как в центре UJM находится опыт пользователя, все тесты я проводил на прототипах, созданных на фреймворке flutter. '} 
                        video={smartVideo}
                        figarea={false}
                        linkFigma={''}
                        linkFigjam={''}
                    />
                <BottomNavigation 
                    subTitleP={'Перейти к '} 
                    subTitleB={'User Flow'} 
                    subTitleP2={'Перейти к '} 
                    subTitleB2={'User Story'}
                />
            </div>
        </div>
        </div>
    )
}