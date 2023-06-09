import MusicImg from './style/assets/music.png';
import music from './style/Lottie/music.lottie';
import Union from './style/assets/Union.png';
import '@dotlottie/player-component';

export default function MusicPageYand() {


    function MusicAnim() {
        return (
            <div className='music_anim'>
                <dotlottie-player
                    src={music}
                    autoplay
                    loop
                />
            </div>
        )    
    }
    return (
        <div className='music_cont'>
            <div className="music_title">
                <div className="music_title_head">
                    <p className="title_h1">Звук</p>
                    <p className="title_h2">Слушайте любимую музыку с чистым объёмным звучанием, куда бы ни поставили колонку</p>
                </div>
                <div className="music_title_bott">
                    <div className="music_title_bott_cont">
                        <p className="title_h2_bold">Апериодическая решётка</p>
                        <p className="title_h3">Защищает звук от искажений при воспроизведении</p>
                    </div>
                    <div className="music_title_bott_cont">
                        <p className="title_h2_bold">Room Correction</p>
                        <p className="title_h3">Подстраивает звучание под размеры и форму помещения</p>
                    </div>
                    <p className="title_h2_bold">30 Вт</p>
                </div>
            </div>
            <img className="music_img" src={MusicImg}/>
            {MusicAnim()}
            <img className='music_union' src={Union} />
        </div>
    )
}

