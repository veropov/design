import uiImg from '../../banner/img banner/UI-Back.jpg';
import UIHomeBanner from '../../banner/img banner/UI.png';
import { StateBanner } from "../../banner/banner";
import Header from "../../../lib/header";
import { BottomNavigation } from "../../bottom navigation/bottom-navigation";
import HomeSmartUI from '../style/img/HomePageSmart.png';
import NotiSmartUI from '../style/img/NotificationSmart.png';
import HistorySmartUI from '../style/img/HistorySmart.png';
import HelpSmartUI from '../style/img/Help-Smart.png';

export const UIHome = () => {

    const banner = new StateBanner(
        'User Interface',
        'Правила оформления сайта',
        'Cочетания цветов, шрифты, иконки',
        uiImg,
        UIHomeBanner,
        'UIImg'
    )

    return (
        <div className="container">
            <Header />
            <div className="main">
                <div className="container_main-1">
                    {banner.StateDots()}
                    <div className="sub_cont">
                        <p className='title_cont'>HomePage</p>
                        <div className='ui-container-img'><img className='ui-img' src={HomeSmartUI}/></div>
                    </div>
                    <div className="sub_cont">
                        <p className='title_cont'>Уведомления</p>
                        <div className='ui-container-img'><img className='ui-img' src={NotiSmartUI}/></div>
                    </div>
                    <div className="sub_cont">
                        <p className='title_cont'>История</p>
                        <div className='ui-container-img'><img className='ui-img' src={HistorySmartUI}/></div>
                    </div>
                    <div className="sub_cont">
                        <p className='title_cont'>Поддержка</p>
                        <div className='ui-container-img'><img className='ui-img-help' src={HelpSmartUI}/></div>
                    </div>
                    <BottomNavigation 
                            subTitleP={'Вернуться в меню'} 
                            subTitleB={'Smart drive'} 
                            subTitleP2={'Перейти к '} 
                            subTitleB2={'User Journey Map'}
                            enter={'/smart-drive'}
                            back={'/smart-drive/ujm'}
                    />
                </div>
            </div>
        </div>
    )
}