import { useEffect, useState } from "react"
import blackButt from './style/Lottie/slider/black-button.lottie';
import blackMusic from './style/Lottie/slider/black-music.lottie';
import redButt from './style/Lottie/slider/red-button.lottie';
import redMusic from './style/Lottie/slider/red-music.lottie';
import whiteButt from './style/Lottie/slider/white-button.lottie';
import whiteMusic from './style/Lottie/slider/white-music.lottie';
import blueButt from './style/Lottie/slider/blue-button.lottie';
import blueMusic from './style/Lottie/slider/blue-music.lottie';

import '@dotlottie/player-component';

import black from './style/assets/black.jpg';
import blue from './style/assets/blue.jpg';
import white from './style/assets/white.jpg';
import red from './style/assets/red.webp';

export const YandSlider = () => {

    const [butt, setButt] = useState({
        click: null,
        active: null,
        obj: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    })
    
    const sliderTrans = [
        blackMusic,
        redMusic,
        blueMusic,
        whiteMusic
    ]

    const clickButt = [
        blackButt,
        redButt,
        blueButt,
        whiteButt
    ]

    const activeButt = [
        blackMusic,
        redMusic,
        blueMusic,
        whiteMusic
    ]

    const buttObj = [
        (<div className="butt_yand_slider_black"></div>),
        (<div className="butt_yand_slider_red"></div>),
        (<div className="butt_yand_slider_blue"></div>),
        (<div className="butt_yand_slider_white"></div>)
    ]

    const yandImg = [
        black,
        red,
        blue,
        white
    ]

    const LottieTrans = (index) => {
        return (
            <div className="yand_slider_lottie_trans">
                <dotlottie-player
                    src={sliderTrans[index]}
                    autoplay
                    speed={1}
                />
            </div>
        )
    }

    function ToggleImg(index) {
        if (butt.obj[index] === butt.active) {
            return yandImg[index]
        } else return null;
    }

    function ToggleTrans(index) {
        if (butt.obj[index] === butt.click) {
            return LottieTrans(index)
        } else return null;
    }

    const YandSliderData = (index) => {
        return (
            <div className="slider_yand_img_cont">
                <div className="slider_yand_trans">
                    {ToggleTrans(index)}
                </div>
                <div className="slider_yand_img">
                    <img src={ToggleImg(index)}/>
                </div>
            </div>
        )
    }

    const LottieClick = (index) => {
        return (
            <div className="yand_slider_lottie_click">
                <dotlottie-player
                    src={clickButt[index]}
                    autoplay
                    speed={1}
                />
            </div>
        )
    }

    const LottieActive = (index) => {
        return (
            <div className="yand_slider_lottie_active">
                <dotlottie-player
                    src={activeButt[index]}
                    autoplay
                    speed={1}
                    loop
                />
            </div>
        )
    }


    function ActiveB(index) {
        return setTimeout(() => {
            setButt({...butt, active: butt.obj[index], click: null})
        }, 450) 
    }

    function ClickB(index) {
        return setButt({...butt, click: butt.obj[index]})
    }

    function ToggleAnim(index) {
        if (butt.obj[index] === butt.active) {
            return LottieActive(index)
        } else return null;
    }

    function ToggleClick(index) {
        if (butt.obj[index] === butt.click) {
            return LottieClick(index)
        } else if (butt.obj[index] === butt.active) {
            return null
        } else return buttObj[index]
    }

    useEffect(() => {
        setButt({...butt, active: butt.obj[0]})
    }, [])

    return (
        <div className="slider_yand">
            <div className="slider_yand_cont">
                {butt.obj.map((elem, index) => (
                    YandSliderData(index)
                ))}
                {butt.obj.map((elem, index) => (
                    <div 
                        className="slider_yand_butt"
                        onClick={() => {
                            ActiveB(index)
                            ClickB(index)
                        }}
                    >
                        {ToggleAnim(index)}
                        {ToggleClick(index)}
                    </div>
                ))}
            </div>
        </div>
    )
}