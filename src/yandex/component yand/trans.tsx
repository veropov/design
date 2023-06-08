import transYan_black from '../style/Lottie/tran.json';
import transYan_red from '../style/Lottie/red trans.json';
import { useEffect, useRef, useState } from "react";
import boss from '../style/assets/yan_boss.png';
import bossRed from '../style/assets/yan_boss_red.png';
import  Lottie  from "lottie-react";

export default function TransitionYand() {

    const [trans, setTrans] = useState({
        active: null,
        objects: [{id: 1}, {id: 2}]
    })

    function toggleBlack() {
        return setTrans({...trans, active: trans.objects[0] as any})
    }

    function toggleRed() {
        return setTrans({...trans, active: trans.objects[1] as any})
    }

    function BlackTrans() {
        if (trans.objects[0] === trans.active) {
            return (
                <div className='yan_lottie_black'>
                    <Lottie animationData={transYan_black} loop={false} />
                </div>
            )
        } else { return null }
            
    }
    
    function RedTrans() {
        if (trans.objects[1] === trans.active) {
            return (
                <div className='yan_lottie_red'>
                    <Lottie animationData={transYan_red} loop={false} />
                </div>
            )
        } else { return null };
    }

    function Timer() {
        const timerRef = useRef(null as any);
    
        function startTimer() {
            timerRef.current = window.setInterval(() => {
                toggleBlack()
            }, 3000);
        }

        function disTimer() {
            timerRef.current = window.setInterval(() => {
                toggleRed()
            }, 6000);
        }

        useEffect(() => {
            startTimer()
            disTimer()
        }, [])

        return (
            <div></div>
        )
    }

    ///IMG///IMG///IMG///IMG
    ///IMG///IMG///IMG///IMG
    ///IMG///IMG///IMG///IMG

    const [img, setImg] = useState({
        active: null,
        objects: [{id: 1}, {id: 2}]
    })

    function toggleBlackImg() {
        return setImg({...img, active: img.objects[0] as any})
    }

    function toggleRedImg() {
        return setImg({...img, active: img.objects[1] as any})
    }

    function TimerImg() {
        const timer = useRef(null as any)
        
        function startTimerImg() {
            timer.current = setInterval(() => {
            timer.current = setTimeout(() => {
                toggleRedImg()
                    timer.current = setTimeout(() => { 
                        toggleBlackImg() 
                    }, 3000)
                }, 1200);
            }, 6000)
        }

        function FirstTimeer() {
            timer.current = setTimeout(() => {
                toggleBlackImg()
            }, 4200);
        }

        useEffect(() => {
            FirstTimeer()
            startTimerImg()
        }, [])

        return (
            <div></div>
        )
    }

    function BlackTransImg() {
        if (img.objects[0] === img.active) {
            return (
                boss
            )
        } else return bossRed 
            
    }

    return (
        <div className='homeYan_cont'>
            <div className="homeYan_title">
                <p className="yan_b">Новая Яндекс Станция</p>
                <p className="yan_p">Умная колонка второго поколения с лаконичным <br /> дизайном и чистым звуком станет центром вашего <br />умного дома с Алисой</p>
                <img className="yan_boss" src={BlackTransImg()} />
            </div>
                {BlackTrans()}
                {RedTrans()}
                {Timer()}
                {TimerImg()}
        </div>
    )
}