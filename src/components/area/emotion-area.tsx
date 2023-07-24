import ReactPlayer from "react-player"
import { FigmaContainerArea } from "./figma-area"
import { AngrySVG, CodeSVG, ConfusedSVG, HappySVG, PencilSVG } from "./area img/area-svg"

interface TextProps {
    name: String,
    title: String,
    title2: String,
    happeTitle: String,
    conusedTitle: String,
    angryTitle: String,
    pencilTitle: String,
    codeTitle: string,
    video: any,
    width?: any,
    height?: any,
}

export const EmotionArea = ({name, title, title2, happeTitle, conusedTitle, angryTitle, pencilTitle, codeTitle, video, width, height} : TextProps) => {

    const ktitle = [
        title,
        title2
    ]


    return (
        <div className="sub_cont">
        <p className='title_cont_smart'>{name}</p>
            <div className="sub_cont_smart_video">
                <div className="text-area-main">
                    <div className="emotion-area-content">
                        <div className="text-area-text">
                            <p className="bold_p">{ktitle[0]}</p>
                            <div className="emotion_container">
                                <div className="emotion-container-area-happy">
                                    <div className="emotion-container-img"><HappySVG /></div>
                                    <p className="info_p">{happeTitle}</p>
                                </div>
                                <div className="emotion-container-area-confused">
                                    <div className="emotion-container-img"><ConfusedSVG /></div>
                                    <p className="info_p">{conusedTitle}</p>
                                </div>
                                <div className="emotion-container-area-angry">
                                    <div className="emotion-container-img"><AngrySVG /></div>
                                    <p className="info_p">{angryTitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-area-text">
                            <p className="bold_p">{ktitle[1]}</p>
                            <div className="emotion_container">
                                <div className="emotion-container-area">
                                    <div className="emotion-container-img"><PencilSVG /></div>
                                    <p className="info_p">{pencilTitle}</p>
                                </div>
                                <div className="emotion-container-area">
                                    <div className="emotion-container-img"><CodeSVG /></div>
                                    <p className="info_p">{codeTitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Smart-ujm-video-main">
                    <ReactPlayer 
                        url={video}
                        className="Smart-ujm-video"
                        playing={true}
                        loop={true}
                        width={width}
                        height={height}
                        autoPlay muted
                    />
                </div>
            </div>
        </div>
    )
}