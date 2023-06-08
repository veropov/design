import '../style/main.css';
import { Button } from './component yand/button';
import MusicPage from "./music";
import Transition from  './component yand/trans';
import Header from '../lib/header';

const HomePageYand = () => {

    const buttonWatch = new Button(
        'Cмотреть видео',
        'button_watch_yand_p',
        'button_watch_yand'
    );

    return (
        <div className="container">
            <Header />
            <div className="main_yand">
                <div className="container_main_yand">
                    <div className="sub_cont_yand">
                        <div className="homeYan_cont">
                            {buttonWatch.Button()}
                            <Transition />
                        </div>
                    </div>
                </div>
            </div>
            <MusicPage />
        </div>
    )
}

export default HomePageYand;
