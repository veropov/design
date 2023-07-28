import '../style/main.css';
import Header from "./header";
import MainProject from "./projects";
import UxLeftImg from '../style/assets/img/Group 277130446.png';
import UxRightImg from '../style/assets/img/Group 277130445.png';
import nps from '../style/assets/img/nps.png';

import Smart from '../style/assets/img/Smart.jpg';
import Baggage from '../style/assets/img/Baggage.jpg';
import Fitnest from '../style/assets/img/FitnestX.jpg';

import DartCode from '../style/assets/img/dart-code.png';
import JSCode from '../style/assets/img/JS-code.png';
import PHPtCode from '../style/assets/img/PHP-code.png';
import { ProjArea2 } from '../components/area/project area/projects-area';

export default function ProjectPage() {
    return (
        <div className="container">
            <Header />
            <div className='main'>
                <div className='container_main-1'>
                    <div className="sub_cont">
                        <div className='projectPage'>
                        <div className="sub_cont">
                        <p className='title_cont'>Проекты</p>
                        <ProjArea2 />
                    </div>
                    <div className="sub_cont">
                        <p className='title_cont'>Точечные задачи</p>
                        <div className="project_container">
                            { MainProject('FUN SUN UserFlow', 'Построение user flow анкета-тур (переход через внешние источники)', 'comm', true, true, true, true, false, true, 'https://www.figma.com/file/QtkWSTG7IlYYi2RLYkswZm/Untitled?type=design&node-id=0%3A1&mode=design&t=DVconLdP3coBdlOX-1', Smart, false) }
                            { MainProject('FUN&SUN Бронь', 'Оформление услуг в аэропорту, форма обратной связи', 'comm', true, true, true, false, true, false, 'https://www.figma.com/file/SQvge574qM6tTgjtcWM1GJ/FUN%26SUN-projects?type=design&node-id=0%3A1&t=1YttjT2b5n2LNMkz-1', Baggage, false) }
                            { MainProject('Дилерский сайт Lada', 'Создание продающего лендинга с карточками товаров', 'pet', false, false, true, false, true, false, 'https://www.figma.com/file/k4IDaZbkVdatVAKUXZ4jEc/Lada?type=design&node-id=0%3A1&t=4Tl82BB3qCw5vNn6-1', Fitnest, false) }
                        </div>
                    </div>
                            <div className="project_container">
                                { MainProject('Lottie анимация', 'Анимация прелоадера для круизного направления FUN&SUN', 'comm', true, true, false, false, false, true, 'https://github.com/veropov/Fun-Sun-anim', JSCode, true) }
                                { MainProject('Сайт PHP, native JS', 'Первый проект со сложной версткой и нативном JavaScript без библиотек', 'pet', false, true, false, false, false, true, 'https://github.com/veropov/Diagnostic_irk', PHPtCode, true) }
                                { MainProject('FitnestX', 'Разработка фитнес приложения с нуля на фреймворке Flutter(dart)', 'pet', false, true, true, true, false, true, 'https://github.com/veropov/Train', DartCode, true) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}