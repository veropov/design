import ReactPlayer from "react-player";
import Header from "../../../lib/header";
import { MainArea, MainArea2 } from "../../area/job area/main-area";
import { StateBanner } from "../../banner/banner";
import ufImg from '../../banner/img banner/UserFlow-Back.jpg';
import UFHome from '../../banner/img banner/UserFlow.png';
import { BottomNavigation } from "../../bottom navigation/bottom-navigation";
import img1 from '../style/img/user-flow-1.png';
import img2 from '../style/img/user-flow-2.png';

import iserflowvideo from '../../video/userflow.mp4';
import userflowImg from '../style/img/Cover.jpg';

export const UserFlowHome = () => {

    const banner = new StateBanner(
        'UserFlow',
        'Визуальное представление',
        'пути пользователя',
        ufImg,
        UFHome,
        'UserFlowImg'
    )

    return (
        <div className="container">
            <Header />
            <div className="main">
                <div className="container_main-1">
                    {banner.StateDots()}
                        <MainArea2
                            name={'Описание'} 
                            title={'Метод'} 
                            subTitle={'Я использовал схематичный метод без использования вайрфреймов для экономии времени и ресурсов. CTA представлено маршрутом A-B с ответвлениями, дополняющими целевое действие. '} 
                            title2={'Легенда'} 
                            subTitle2={'Я выбрал стандартную легенду, наследуемую из виджетов FigJam. Кружки — это точки входа, ромбы — экраны, закрашенные ромбы — развилки принятия решений.'}
                            title3={'Опыт'} 
                            subTitle3={'Я переписывал user flow несколько раз после создания и тестирования прототипов, так как изначальные решения оказались неэффективными. Я строил схемы не только внутри приложения, но и также переходы пользователей через внешние каналы к продукту (ограничивался рекламными офферами, ведущими к google play).'}  
                            video={userflowImg}
                            figarea={false}
                        />
                        <div className="Smart-userflow-main">
                        <ReactPlayer 
                            url={iserflowvideo}
                            className="Smart-userflow-main-video"
                            playing={true}
                            loop={true}
                            autoPlay muted
                        />
                        </div>
                        <div className="sub_cont">
                            <p className='title_cont'>Целевое действие</p>
                            <div className="user-flow-container">
                                <div className="user-flow-text">
                                    <p className="user-flow-p">Я начал построение схемы с ключевого целевого действия (CTA), разместив его на первоначальном экране (HomePage). Для того, чтобы получить скидку на оформление ОСАГО, пользователю необходимо было пройти несколько этапов (пробег в 300 км, открывающий прогресс вождения, достаточное кол-во баллов и тд), которые были отображены на главном экране.</p>
                                </div>
                                <img className="user-flow-img" src={img1}></img>
                            </div>
                        </div>
                        <div className="sub_cont">
                            <p className='title_cont'>Разветвления</p>
                            <div className="user-flow-container">
                                <div className="user-flow-text">
                                    <p className="user-flow-p">Разветвления — это ключевые события, которые проходит пользователь для достижения целевого действия. Для того, чтобы набрать достаточное кол-во баллов и получить скидку ОСАГО, пользователь должен был набирать не менее 70 баллов вождения. Баллы вождения набираются согласно криттериям, которые я также отобразил на галвном экране, так как они напрямую влияют на прогресс вожддения.</p>
                                </div>
                                <img className="user-flow-img" src={img2}></img>
                            </div>
                        </div>
                        <BottomNavigation 
                            subTitleP={'Вернуться в меню'} 
                            subTitleB={'Smart drive'} 
                            subTitleP2={'Перейти к '} 
                            subTitleB2={'User Story'}
                            enter={'/smart-drive'}
                            back={'/smart-drive/ujm/progress'}
                        />
                </div>
            </div>
        </div>
    )
}