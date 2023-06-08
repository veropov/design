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

export default function ProjectPage() {
    return (
        <div className="container">
            <Header />
            <div className='main'>
                <div className='container_main-1'>
                    <div className="sub_cont">
                        <div className='projectPage'>
                            <div className="project_container">
                                { MainProject('Smart drive', 'Приложение, которое позволяет сократить расходы на оформление ОСАГО', 'comm', true, true, true, true, true, true, 'https://www.figma.com/file/KqSP2KCkcgf5dmwGOheM7M/Smart-drive?type=design&node-id=293%3A564&t=jN8krBkmCu9Fss5J-1', Smart, false) }
                                { MainProject('FUN&SUN project', 'Оформление услуг в аэропорту, раздел обратной связи, поддержка NPS системы', 'comm', true, true, true, true, true, false, 'https://www.figma.com/file/SQvge574qM6tTgjtcWM1GJ/FUN%26SUN-projects?type=design&node-id=0%3A1&t=1YttjT2b5n2LNMkz-1', Baggage, false) }
                                { MainProject('FitnestX', 'Разработка приложения с нуля, тестирование функционала, UX исследования', 'pet', false, true, false, false, true, true, 'https://www.figma.com/file/9mZkv8cZ3mMbVoNdgDGm6k/Port?type=design&node-id=0%3A1&t=mknrEsQoNr8OEwyb-1', Fitnest, false) }
                            </div>
                            <div className="project_container">
                                { MainProject('Lottie анимация', 'Приложение, которое позволяет сократить расходы на оформление ОСАГО', 'comm', true, true, false, false, false, true, 'https://github.com/veropov/Fun-Sun-anim', JSCode, true) }
                                { MainProject('Сайт PHP, native JS', 'Разработка приложения с нуля, тестирование функционала, UX исследования', 'pet', false, true, false, false, false, true, 'https://github.com/veropov/Diagnostic_irk', PHPtCode, true) }
                                { MainProject('FitnestX', 'Оформление услуг в аэропорту, раздел обратной связи, поддержка NPS системы', 'pet', false, true, true, true, false, true, 'https://github.com/veropov/Train', DartCode, true) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}