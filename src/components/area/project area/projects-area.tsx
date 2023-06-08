import { useEffect, useState } from "react";
import Show from '../project area/Showreel HomePage.jpg';
import Fun from '../project area/Fun HomePage.jpg';
import Lottie from "lottie-react";
import trans from './trans_test.json';


    function ProjArea() {

    const title = [
        'Showreel 2021-22',
        'FUN&SUN Project'
    ]

    const subTitle = [
        'Примеры работ по 2D моушен дизайну (фриланс, коммерция, пет-проекты). Шейповая, персонажная, basic VFX анимация, монтаж.',
        'Дизайн интерфейсов. Оформление услуг в аэропорту (фаст-трек, упаковка багажа, бизнес зал и тд) через API партнеров.'
    ]

    const image = [
        Show,
        Fun
    ]

    const hrefHome = [
        'https://www.youtube.com/watch?v=EUSxsN3YXl4',
        'https://www.figma.com/file/SQvge574qM6tTgjtcWM1GJ/FUN%26SUN-projects?type=design&node-id=3%3A25637&t=hVzvHrBigKVkESR4-1'
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
                <Lottie 
                    autoPlay={true}
                    loop={false} 
                    animationData={trans}
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
        )
    }

    export default ProjArea;





// 'Пет-проекты',
// 'Альтернативный user flow VK, Сбер, МТС. CJM, глубинное интервью. Разработка приложения для фитнеса и сайта мед услуг.',
// Comm

// 'Коммерческие проекты',
// 'B2b сервисы для агентов (FUN&SUN). Кроссплатформенные приложения для страхования (BAT IT). UI-компоненты на JS, dart',
// Comm