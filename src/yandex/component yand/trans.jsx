import { useEffect, useState } from 'react';
import bossAnim from '../style/Lottie/boss3.lottie'
import boss from '../style/assets/yan_boss.png';
import '@dotlottie/player-component';

export default function TransitionYand() {

    const [bossan, setBoss] = useState(false);

    useEffect(() => setBoss(true))

    function BossAnim() {
        if (bossan === true) {
            return <div className='boss_anim'>
                <dotlottie-player
                    src={bossAnim}
                    autoplay
                    speed={0.4}
                />
            </div>
        } else return null;   
    }

    const Timer = () => {

        function bossAnn() {
            setTimeout(() => {
                setBoss(!bossan)
            }, 10000)
        }

        useEffect(() => bossAnn())

        return (<div></div>)

    }

    return (
        <div className='homeYan_cont'>
            <div className="homeYan_title">
                <p className="yan_b">Новая Яндекс Станция</p>
                <p className="yan_p">Умная колонка второго поколения с лаконичным <br /> дизайном и чистым звуком станет центром вашего <br />умного дома с Алисой</p>
                <img className="yan_boss" src={boss} />
            </div>
            {Timer()}
            {BossAnim()}
        </div>
    )
}