import { ClassArea, ClassMainArea } from "./job-area";
import action from '../area img/action.png';
import emotion from '../area img/emotion.png';
import update from '../area img/update.png';
import { FigmaContainerArea } from "../figma-area";
import ReactPlayer from "react-player";

interface MainAreaProps {
    name: String,
    title: String,
    subTitle: String,
    title2: String,
    subTitle2: String,
    title3: String,
    subTitle3: String,
    video: any,
    width?: any,
    height?: any,
    figarea?: boolean,
    linkFigma?: String,
    linkFigjam?: String

}

export const MainArea = ({name, title, subTitle, title2, subTitle2, video, width, height, figarea, linkFigma, linkFigjam} : MainAreaProps) => {

    const ktitle = [
        title,
        title2
    ]

    const ksubTitle = [
        subTitle,
        subTitle2
    ]


    const funJob = new ClassMainArea(
        'Действия', 
        'Что делает?', 
        'Создается на основе usability тестирования. ',
        action
    );

    const batJob = new ClassMainArea(
        'Эмоции', 
        'Что испытывает?', 
        'Эмоциональная карта пользователя.', 
        emotion
    );

    const novaJob = new ClassMainArea(
        'Улучшения', 
        'Что хочет улучшить?', 
        'Видение продукта со стороны пользователя.',
        update
    );

    return (
        <div className="sub_cont">
            <p className='title_cont'>{name}</p>
            <div className="area_main">
                <div className="area_sub_main">
                    <div className="Smart-ujm-area-video-main">
                        <ReactPlayer 
                            url={video}
                            className="Smart-ujm-area-video"
                            playing={true}
                            loop={true}
                            width={width}
                            height={height}
                            autoPlay muted
                        />
                    </div>
                    <div className="container_area-job">
                        { funJob.JobArea() }
                        { batJob.JobArea() }
                        { novaJob.JobArea() }
                    </div>
                </div>
                <div className="info_main-area">
                    <div className="text-area-main">
                        <div className="text-area-content">
                            {ktitle.map((el, index) => (
                                <div className="text-area-text">
                                    <p className="bold_p">{ktitle[index]}</p>
                                    <p className="info_p">{ksubTitle[index]}</p>
                                </div>
                            ))}
                        </div>
                        {figarea ? <FigmaContainerArea linkFigma={linkFigma} linkFigjam={linkFigjam}/> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const MainArea2 = ({name, title, subTitle, title2, subTitle2, title3, subTitle3, video, width, height, figarea, linkFigma, linkFigjam} : MainAreaProps) => {

    const ktitle = [
        title,
        title2,
        title3,
    ]

    const ksubTitle = [
        subTitle,
        subTitle2,
        subTitle3,
    ]


    const funJob = new ClassMainArea(
        'Действия', 
        'Что делает?', 
        'Создается на основе usability тестирования. ',
        action
    );

    const batJob = new ClassMainArea(
        'Эмоции', 
        'Что испытывает?', 
        'Эмоциональная карта пользователя.', 
        emotion
    );

    const novaJob = new ClassMainArea(
        'Улучшения', 
        'Что хочет улучшить?', 
        'Видение продукта со стороны пользователя.',
        update
    );

    return (
        <div className="sub_cont">
            <p className='title_cont'>{name}</p>
            <div className="area_main">
                <div className="area_sub_main">
                    <div className="Smart-userflow">
                        <img className="Smart-userflow-video" src={video}/>
                    </div>
                </div>
                <div className="info_main-area">
                    <div className="text-area-main">
                        <div className="text-area-content">
                            {ktitle.map((el, index) => (
                                <div className="text-area-text">
                                    <p className="bold_p">{ktitle[index]}</p>
                                    <p className="info_p">{ksubTitle[index]}</p>
                                </div>
                            ))}
                        </div>
                        {figarea ? <FigmaContainerArea linkFigma={linkFigma} linkFigjam={linkFigjam}/> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}