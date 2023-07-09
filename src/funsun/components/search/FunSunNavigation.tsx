import { useEffect, useRef, useState } from "react";
import search1 from '../../style/Lottie/toggleSearch/search_toggle_1.json';
import search2 from '../../style/Lottie/toggleSearch/search_toggle_2.json';
import search3 from '../../style/Lottie/toggleSearch/search_toggle_3.json';
import search4 from '../../style/Lottie/toggleSearch/search_toggle_4.json';
import search5 from '../../style/Lottie/toggleSearch/search_toggle_5.json';
import search6 from '../../style/Lottie/toggleSearch/search_toggle_6.json';
import search7 from '../../style/Lottie/toggleSearch/search_toggle_7.json';
import search8 from '../../style/Lottie/toggleSearch/search_toggle_8.json';
import searchTrans from '../../style/Lottie/trans.json';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Tours from "./FunSunTours";

const NavigationFunSun = () => {

    const [lottie, setLottie] = useState(true);

    const [nav, setNav] = useState({
        anim: null,
        active: null,
        object: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}]
    })

    const toggleSearch = [
        search1,
        search2,
        search3,
        search4,
        search5,
        search6,
        search7,
        search8,
    ]

    function LottieTransition() {
        if (lottie === false) { 
            return (
                <div className="Search_transition">
                    <Player
                        src={searchTrans} 
                        loop={false} 
                        autoplay={true}
                        speed={1.4}
                    />
                </div>
            )
        } else return null;
    }

    function LottieSearch(index: number) {
        if (nav.object[index] === nav.anim && nav.object[index] !== nav.active) {
            return (
                <div className="lottie_true">
                    <Player
                        src={toggleSearch[index]} 
                        loop={false} 
                        autoplay={true}
                        speed={1.6}
                    />
                </div>
            )
        }
    }

    const navS = [
        <p>Туры</p>,
        <p>Отели</p>,
        <p>Авиабилеты</p>,
        <p>Круизы</p>,
        <p>По России</p>,
        <p>Акции</p>,
        <p>Отели FUN&SUN</p>,
        <p>Горящие туры</p>
    ]

    //Таймер на появление анимации
    function navAnim(index: number) {
        return setNav({...nav, anim: nav.object[index] as any})
    }

    //Таймер на активацию элемента навигации (совпадает с окончанием таймера по исчезновению бэкграунда)
    function navActive(index: number) {
        return setNav({...nav, active: nav.object[index] as any, anim: null})
    }

    function SearchTrans() {
        return setTimeout(() => {
            setLottie(false)
            setTimeout(() => {
                setLottie(true)
            }, 700)
        }, 0)
    }
    
    //Если сработал клик по объекту из индекса, происходит изменение CSS навигации
    function toggleCss(index: number) {
        if (nav.object[index] === nav.active) {
            return 'search_nav_true'
        } else return 'search_nav_false'
    }
    return (
        <div className="search_main">
            <div className="search_container">
                {nav.object.map((elements, index) => (
                <>
                    <div 
                        onMouseEnter={() => {
                            navAnim(index)
                        }}
                        onClick={() => {
                            navActive(index)
                            SearchTrans()
                        }}
                        className={toggleCss(index)}
                    >
                        {navS[index]}
                        <div className="lottie_search">
                            {LottieSearch(index)}
                        </div>
                    </div>
                </>
                ))}
            </div>
            <div className='fun_sun_anim_search'>
                <Tours /> 
                {LottieTransition()}
            </div>
        </div>
    )
}

export default NavigationFunSun;