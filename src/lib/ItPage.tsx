import '../style/main.css';
import Header from "./header";
import MainProject from "./projects";
import UxLeftImg from '../style/assets/img/Group 277130449.png';
import UxRightImg from '../style/assets/img/Group 277130450.png';
import json from '../components/lottie/animation/cruise.json';

import DartCode from '../style/assets/img/dart-code.png';
import JSCode from '../style/assets/img/JS-code.png';
import PHPtCode from '../style/assets/img/PHP-code.png';

export default function ItPage() {
    return (
        <div className="container">
            <Header />
            <div className='main'>
                <div className='container_main-1'>
                    <div className="container_banner_it">
                        <div className="frame_banner_it">
                            <img src={UxLeftImg} className='img_it_1'/>
                            <p className='p_banner_it'>IT</p>
                            <img src={UxRightImg} className='img_it_2'/>
                        </div>
                    </div>
                    <div className="sub_cont">
                        <p className='title_cont'>Проекты</p>
                        <div className="project_container">
                            { MainProject('Lottie анимация', 'Анимация прелоадера для круизного направления FUN&SUN', 'comm', true, true, false, false, false, true, 'https://github.com/veropov/Fun-Sun-anim', JSCode, true) }
                            { MainProject('Сайт PHP, native JS', 'Первый проект со сложной версткой и нативном JavaScript без библиотек', 'pet', false, true, false, false, false, true, 'https://github.com/veropov/Diagnostic_irk', PHPtCode, true) }
                            { MainProject('FitnestX', 'Разработка фитнес приложения с нуля на фреймворке Flutter(dart)', 'pet', false, true, true, true, false, true, 'https://github.com/veropov/Train', DartCode, true) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}