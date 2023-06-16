import { useEffect, useState } from "react"
import blackButt from './style/Lottie/slider/black-button.lottie';
import blackMusic from './style/Lottie/slider/black-music.lottie';
import redButt from './style/Lottie/slider/red-button.lottie';
import redMusic from './style/Lottie/slider/red-music.lottie';
import whiteButt from './style/Lottie/slider/white-button.lottie';
import whiteMusic from './style/Lottie/slider/white-music.lottie';
import blueButt from './style/Lottie/slider/blue-button.lottie';
import blueMusic from './style/Lottie/slider/blue-music.lottie';

import blacB from './style/Lottie/slider/new/bb.lottie';
import blacM from './style/Lottie/slider/new/bm.lottie';
import RedB from './style/Lottie/slider/new/rb.lottie';
import RedM from './style/Lottie/slider/new/rm.lottie';
import BlueB from './style/Lottie/slider/new/blb.lottie';
import BlueM from './style/Lottie/slider/new/blm.lottie';
import WhiteB from './style/Lottie/slider/new/wb.lottie';
import WhiteM from './style/Lottie/slider/new/wm.lottie';

import blackTrans from './style/Lottie/slider/trans/black-trans-slider.lottie';
import redTrans from './style/Lottie/slider/trans/red-trans-slider.lottie';
import blueTrans from './style/Lottie/slider/trans/blue-trans-slider.lottie';
import whiteTrans from './style/Lottie/slider/trans/white-trans-slider.lottie';

import '@dotlottie/player-component';
import Lottie from "lottie-react";

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

    const [trans, setTrans] = useState({
        active: null,
        disActive: null,
        obj: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    })
    
    const sliderTrans = [
        redTrans,
        blackTrans,
        blueTrans,
        whiteTrans
    ]

    const clickButt = [
        RedB,
        blacB,
        BlueB,
        WhiteB,
    ]

    const activeButt = [
        RedM,
        blacM,
        BlueM,
        WhiteM,
    ]

    const buttObj = [
        (<div className="butt_yand_slider_red"></div>),
        (<div className="butt_yand_slider_black"></div>),
        (<div className="butt_yand_slider_blue"></div>),
        (<div className="butt_yand_slider_white"></div>)
    ]

    const yandImg = [
        red,
        black,
        blue,
        white
    ]

    function redText() {
        return (
            <div className="slider_yand_text">
                <p className="slider_yand_red_limit">Лимитированная серия</p>
                <p className="slider_yand_p_light">Яндекс Станция драгоценного рубинового цвета станет <br />акцентом в вашем интерьере</p>
                <div className="slider_yand_red_button">
                    <p>Купить</p>
                </div>
            </div>
        )
    }

    const sliderText = [
        redText(),
        redText(),
        redText(),
        redText()
    ]

    const LottieTrans = (index) => {
        return (
            <div className="yand_slider_lottie_trans">
                <dotlottie-player
                    src={sliderTrans[index]}
                    autoplay
                    speed={1.4}
                />
            </div>
        )
    }


    function ToggleImg() {
        if (butt.obj[0] === butt.active) {
            return (
                <div className="slider_yand_img">
                    <img src={yandImg[0]} style={{zIndex: 1}}/>
                    <img src={yandImg[1]} style={{zIndex: 0}}/>
                    <img src={yandImg[2]} style={{zIndex: 0}}/>
                    <img src={yandImg[3]} style={{zIndex: 0}}/>
                </div>
            )
        } else if (butt.obj[1] === butt.active) {
            return (
                <div className="slider_yand_img">
                    <img src={yandImg[0]} style={{zIndex: 0}}/>
                    <img src={yandImg[1]} style={{zIndex: 1}}/>
                    <img src={yandImg[2]} style={{zIndex: 0}}/>
                    <img src={yandImg[3]} style={{zIndex: 0}}/>
                </div>
            )
        } else if (butt.obj[2] === butt.active) {
            return (
                <div className="slider_yand_img">
                    <img src={yandImg[0]} style={{zIndex: 0}}/>
                    <img src={yandImg[1]} style={{zIndex: 0}}/>
                    <img src={yandImg[2]} style={{zIndex: 1}}/>
                    <img src={yandImg[3]} style={{zIndex: 0}}/>
                </div>
            )
        } else if (butt.obj[3] === butt.active) {
            return (
                <div className="slider_yand_img">
                    <img src={yandImg[0]} style={{zIndex: 0}}/>
                    <img src={yandImg[1]} style={{zIndex: 0}}/>
                    <img src={yandImg[2]} style={{zIndex: 0}}/>
                    <img src={yandImg[3]} style={{zIndex: 1}}/>
                </div>
            )
        }
    }

    function ToggleTrans(index) {
        if (trans.obj[index] === trans.active) {
            return LottieTrans(index)
        } else if (trans.obj[index] === trans.disActive) { 
            return null;
        }
    }

    const YandSliderData = (index) => {
        return (
            <div className="slider_yand_img_cont">
                <div className="slider_yand_trans">
                    {ToggleTrans(index)}
                </div>
                <div className="slider_yand_text_cont">
                    {sliderText[index]}
                </div>
                <div className="slider_yand_img">
                    {ToggleImg()}
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

    function ActiveTrans(index) {
        return setTrans({...trans, active: trans.obj[index]})
    }

    function DisActiveTrans(index) {
        return setTimeout(() => {
            setTrans({...trans, disActive: trans.obj[index], active: null})
        }, 900)
    }


    function ActiveB(index) {
        return setTimeout(() => {
            setButt({...butt, active: butt.obj[index], click: null})
        }, 440) 
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
                            ActiveTrans(index)
                            DisActiveTrans(index)
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