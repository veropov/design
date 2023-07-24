import { useState } from "react";
import { BottomNavLeft } from "./bottom-nav-svg";
import { BottomNavRight } from "./bottom-nav-svg";
import { setTimeout } from "timers/promises";
import { NavLink } from "react-router-dom";

interface BtnNav {
    subTitleP: String,
    subTitleP2: String,
    subTitleB: String,
    subTitleB2: String,
    enter: String,
    back: String,

}

export const BottomNavigation = ({subTitleP, subTitleB, subTitleP2, subTitleB2, enter, back} : BtnNav) => {

    const hrefNavig = [
        enter,
        back
    ]

    const iconNav = [
        (
            <div className="sub_navigation_head">
                <BottomNavLeft />
                <p className="sub_navigation_head_text">Назад</p>
            </div>
        ),
        (
            <div className="sub_navigation_head">
                <p className="sub_navigation_head_text">Вперед</p>
                <BottomNavRight />

            </div>
        )
    ]

    const titleP = [
        subTitleP,
        subTitleP2
    ]

    const titleB = [
        subTitleB,
        subTitleB2
    ]

    const [nav, setNav] = useState({
        obj: [{id: 1}, {id:2}],
        active: null,
        hover: null
    })


    function toggleHover(index: number) {
        return setNav({...nav, active: nav.obj[index]} as any)
    }


    function toggleDisHover() {
        return setNav({...nav, active: null})
    }

    function styleNavigation(index: number) {
        if (nav.active === nav.obj[index]) {
            return 'sub_navigation_hiddden'
        } else return 'sub_navigation_hiddden_none'
    }

    function styleNavigationBorder(index: number) {
        if (nav.active === nav.obj[index]) {
            return 'sub_navigation_border'
        } else return 'sub_navigation_border_none'
    }
    
    

    function kek(index: number) {
        return window.setTimeout(() => {
            setNav({...nav, active: nav.obj[index], hover: nav.obj[index]} as any)
        }, 150)
    }

    function diskek() {
        return window.setTimeout(() => {
            setNav({...nav, hover: null, active: null})
        }, 150)
    }

    function stylekek(index: number) {
        if (nav.hover === nav.obj[index]) {
            return 'sub_kek'
        } else return 'sub_kek_none'
    }


    return (
        <div className="sub_cont_navigation">
            {nav.obj.map((el, index) => (
                <a href={hrefNavig[index] as any} style={{textDecoration: 'none'}}>
                    <div className='sub_navigation_main'
                        onMouseEnter={() => (
                            toggleHover(index),
                            kek(index)
                        )}
                        onMouseLeave={() => (
                            toggleDisHover(),
                            diskek()
                        )}
                    >
                        {iconNav[index]}
                        <div className="sub_navigation_content">
                            <p className="sub_navigation_p">{titleP[index]}</p>
                            <p className="sub_navigation_bold">{titleB[index]}</p>
                        </div>
                        <div className={styleNavigationBorder(index)}></div>
                        <div className={stylekek(index)}></div>
                        <div className={styleNavigation(index)}></div>
                    </div>
                </a>
            ))}
        </div>
    )
}