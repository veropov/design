import '../style/main.css';
import { ClassArea } from '../components/area/job area/job-area';
import { InArea } from '../components/area/info area/info-area';
import  Header from './header';
import { Banner } from '../components/banner/banner';
import Projects from '../lib/projects';

import Avatar from '../style/assets/img/IeOXLE49ZsTul0kCRk8KHfn4JjhEKUii43Suk1bYoWxjHHt7-alhvY5yPZX4W6JSsU-dK6p3.jpg';
import FunSun from '../style/assets/fun sun.svg';
import BatIt from '../style/assets/bat it 1.svg';
import NovaDacha from '../style/assets/nova dacha 1.svg';
import Figma from '../style/assets/figma.svg';
import AfterEffect from '../style/assets/after.svg';
import Illustrator from '../style/assets/ai.svg';
import Cinema from '../style/assets/cinema.svg';
import Html from '../style/assets/html.svg';
import Css from '../style/assets/css.svg';
import Js from '../style/assets/js.svg';
import Flutter from '../style/assets/flutter.svg';
import BannerImg from '../style/assets/img/mask.png';


import Work from '../style/assets/icons/Work.svg';
import Profile from '../style/assets/icons/Profile.svg';
import Location from '../style/assets/icons/Location.svg';
import Message from '../style/assets/icons/Message.svg';
import {ProjArea}  from '../components/area/project area/projects-area';
import MainProject from '../lib/projects';
import { title } from 'process';

function HomePage() {

/*
////////////////////////////////////
////////////////////////////////////
Информация о прошлых местах работы
////////////////////////////////////
////////////////////////////////////
*/
    const funJob = new ClassArea(
        'FUN&SUN', 
        'Моушен Дизайнер', 
        'Октябрь 2021',
        'Настоящее время', 
        FunSun
    );

    const batJob = new ClassArea(
        'BAT IT', 
        'UX UI дизайнер', 
        'Ноябрь 2020',
        'Октябрь 2021', 
        BatIt
    );

    const novaJob = new ClassArea(
        'Nova Dacha', 
        'Графич. дизайнер', 
        'Март 2020',
        'Ноябрь 2020', 
        NovaDacha
    );

/*
////////////////////////////////////
////////////////////////////////////
Общая информация обо мне
////////////////////////////////////
////////////////////////////////////
*/
    const workInfo = new InArea(
        'Рассматриваю предложения',
        Work
    )

    const profileInfo = new InArea(
        '26 лет, не женат',
        Profile
    )

    const locationInfo = new InArea(
        'Иркутск, удаленная работа',
        Location
    )

    const messageInfo = new InArea(
        'vyacheslav.eropov@yandex.ru',
        Message
    )


/*
////////////////////////////////////
////////////////////////////////////
Кнопка и баннер
////////////////////////////////////
////////////////////////////////////
*/



const banner = new Banner(
    'Вячеслав Еропов',
    'Дизайнер',
    BannerImg
)

    return (
        <div className="container">
        <Header />
        <div className="main">
            <div className="container_main-1">
                { banner.BannerDots() }
                <div className="sub_cont">
                    <p className='title_cont'>Обо мне</p>
                    <div className="about_me">
                        <div className="person_main">
                            <div className="container_person-inf">
                                <div className="photo">
                                    <img className="img_person" src={Avatar}/>
                                </div>
                                <div className="container_person-2">
                                    { workInfo.InfoArea() }
                                    { profileInfo.InfoArea() }
                                    { locationInfo.InfoArea() }
                                    { messageInfo.InfoArea() }
                                </div>
                            </div>
                                <div className="container_person-job">
                                    { funJob.JobArea() }
                                    { batJob.JobArea() }
                                    { novaJob.JobArea() }
                                </div>
                        </div>
                    <div className="info_main">
                        <div className="container_info-1">
                            <p className="info_p">Привет! Мой общий опыт работы дизайнером 3 года. Один год на позиции дизайнера интерфейсов. Я люблю работать в команде, 
                                не боюсь сложных задач. Слежу за тенденциями в сфере дизайна.</p>
                            <p className="info_p">Также я интересуюсь front-end и мобильной разработкой. Этот сайт написан мной с использованием современных веб-технологий: Flexbox, SASS, React.js, lottie.js. В команде BAT IT проекты создавались 
                                на flutter, я принимал участие в написании библиотек.</p>
                        </div>
                        <div className="container_info-2">
                            <p className="bold_p">Мои навыки</p>
                            <div className="container_info-3">
                                <div className="container_info-dsgn">
                                    <div className="prog">
                                        <img src={Figma} />                                          
                                    </div>
                                    <div className="prog">
                                        <img src={AfterEffect}/>
                                    </div>
                                    <div className="prog">
                                        <img src={Illustrator}/>
                                    </div>
                                    <div className="prog">
                                        <img src={Cinema}/>
                                    </div>
                                </div>
                                <div className="container_info-dsgn-2">
                                    <img src={Html}/>
                                    <img src={Css}/>
                                    <img src={Js}/>
                                    <img src={Flutter}/>
                                </div>
                                <div className="container_info-attr">
                                    <p className="info_p">Прототипирование</p>
                                    <p className="info_p">CJM & Persona</p>
                                    <p className="info_p">User flow</p>
                                    <p className="info_p">Дизайн системы</p>
                                </div>
                                <div className="container_info-attr">
                                    <p className="info_p">Креативность</p>
                                    <p className="info_p">Стрессоустойчивость</p>
                                    <p className="info_p">Работа в команде</p>
                                    <p className="info_p">Отзывчивость</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="sub_cont">
                    <p className='title_cont'>Последние работы</p>
                    <ProjArea />
                </div>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
