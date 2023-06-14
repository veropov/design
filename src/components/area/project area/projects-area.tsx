import { useEffect, useState } from "react";
import Show from '../project area/Showreel HomePage.jpg';
import Fun from '../project area/yand.jpg';
import Lottie from "lottie-react";
import trans from './trans_test.json';
import { Player} from '@lottiefiles/react-lottie-player';


    function ProjArea() {

    const title = [
        'Showreel 2021-22',
        'Web анимация Yandex'
    ]

    const subTitle = [
        'Примеры работ по 2D моушен дизайну (фриланс, коммерция, пет-проекты). Шейповая, персонажная, basic VFX анимация, монтаж.',
        'Пет проект с веб анимацией для Яндекс станции, адаптивная верстка. Стек: React, Lottie.js player, SASS'
    ]

    const image = [
        Show,
        Fun
    ]

    const hrefHome = [
        'https://www.youtube.com/watch?v=EUSxsN3YXl4',
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
                    loop={true} 
                    src={trans}
                    renderer='svg'
                    direction={1}
                />
            </div>
        )
    }

        return (
            <div className="portfolio_main">
                {proj.objects.map((elem, index) => (
                <a href={hrefHome[index]}>
                    <div 
                        className="proj_area" 
                        onMouseEnter={() => toggleHover(index)}
                        // onMouseLeave={() => toggleDisHover()}
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
        )
    }

    export default ProjArea;





// 'Пет-проекты',
// 'Альтернативный user flow VK, Сбер, МТС. CJM, глубинное интервью. Разработка приложения для фитнеса и сайта мед услуг.',
// Comm

// 'Коммерческие проекты',
// 'B2b сервисы для агентов (FUN&SUN). Кроссплатформенные приложения для страхования (BAT IT). UI-компоненты на JS, dart',
// Comm