import { useEffect, useState } from "react";
import Show from '../project area/Showreel HomePage.jpg';
import Fun from '../project area/yand.jpg';
import Smart from '../project area/Smart drive.jpg';
import Lottie from "lottie-react";
import trans from './trans_test.json';
import { Player} from '@lottiefiles/react-lottie-player';
import HomePageFunSun from "../../../funsun/FunSunHomePage";


export const ProjArea = () => {

    const title = [
        'Приложение Smart drive',
        'Web анимация Yandex'
    ]

    const subTitle = [
        'Приложение, позволяющее сократить расходы на оформление ОСАГО. UX-исследования: UJM, User Flow, User Story',
        'Пет проект с веб анимацией для Яндекс станции, адаптивная верстка. Тестирование Lottie.js и dotlottie'
    ]

    const image = [
        Smart,
        Fun
    ]

    const hrefHome = [
        '/smart-drive',
        '/yandex'
    ]

    const [proj, setProj] = useState({
        active: null,
        objects: [{id: 1}, {id: 2}]
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
            <div className="lottie_proj">
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

        return (
            <div className="porfolio_cont_m">
                <div className="portfolio_main">
                    {proj.objects.map((elem, index) => (
                    <a href={hrefHome[index]}>
                        <div 
                            className="proj_area" 
                            onMouseEnter={() => toggleHover(index)}
                            onMouseLeave={() => toggleDisHover()}
                        >
                            <div className="proj_cont">
                                <p className="title_proj">{title[index]}</p>
                                <p className="subTitle_proj">{subTitle[index]}</p>
                            </div>
                            <img src={`${image[index]}`}/>
                            {lottieActive(index)}
                        </div>
                    </a>
                    ))}
                </div>
                <div className="sub_cont">
                    <p className='title_cont'>Transition анимация (hover, click)</p>
                    <HomePageFunSun />
                </div>
            </div>
        )
    }


export const ProjArea2 = () => {

        const title = [
            'Приложение Smart drive',
            'Web анимация Yandex'
        ]
    
        const subTitle = [
            'Приложение, позволяющее сократить расходы на оформление ОСАГО. UX-исследования: UJM, User Flow, User Story',
            'Пет проект с веб анимацией для Яндекс станции, адаптивная верстка. Тестирование Lottie.js и dotlottie'
        ]
    
        const image = [
            Smart,
            Fun
        ]
    
        const hrefHome = [
            '/smart-drive',
            '/yandex'
        ]
    
        const [proj, setProj] = useState({
            active: null,
            objects: [{id: 1}, {id: 2}]
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
                <div className="lottie_proj">
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
    
            return (
                <div className="porfolio_cont_m">
                    <div className="portfolio_main">
                        {proj.objects.map((elem, index) => (
                        <a href={hrefHome[index]}>
                            <div 
                                className="proj_area" 
                                onMouseEnter={() => toggleHover(index)}
                                onMouseLeave={() => toggleDisHover()}
                            >
                                <div className="proj_cont">
                                    <p className="title_proj">{title[index]}</p>
                                    <p className="subTitle_proj">{subTitle[index]}</p>
                                </div>
                                <img src={`${image[index]}`}/>
                                {lottieActive(index)}
                            </div>
                        </a>
                        ))}
                    </div>
                </div>
            )
        }