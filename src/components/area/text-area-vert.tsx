import ReactPlayer from "react-player"
import { FigmaContainerArea } from "./figma-area"

interface TextProps {
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

export const TextAreaVert1 = ({name, title, subTitle, video, width, height, figarea, linkFigma, linkFigjam} : TextProps) => {

    const ktitle = [
        title
    ]

    const ksubTitle = [
        subTitle
    ]

    return (
        <div className="sub_cont">
        <p className='title_cont_smart'>{name}</p>
            <div className="sub_cont_smart_video">
                <div className="text-area-main">
                    <div className="text-area-content">
                        {ktitle.map((el, index) => (
                            <div className="text-area-text">
                                <p className="bold_p">{ktitle[index]}</p>
                                <p className="info_p">{ksubTitle[index]}</p>
                            </div>
                        ))}
                    </div>
                    {figarea ? <FigmaContainerArea linkFigma={linkFigma} linkFigjam={linkFigjam} /> : null}
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

export const TextAreaVert2 = ({name, title, subTitle, title2, subTitle2, video, width, height, figarea, linkFigma, linkFigjam} : TextProps) => {

    const ktitle = [
        title,
        title2
    ]

    const ksubTitle = [
        subTitle,
        subTitle2
    ]

    return (
        <div className="sub_cont">
        <p className='title_cont_smart'>{name}</p>
            <div className="sub_cont_smart_video">
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

export const TextAreaVert3 = ({name, title, subTitle, title2, subTitle2, title3, subTitle3, video, width, height, figarea, linkFigma, linkFigjam} : TextProps) => {

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

    return (
        <div className="sub_cont">
            <p className='title_cont_smart'>{name}</p>
            <div className="sub_cont_smart_video">
                <div className="text-area-main">
                    <div className="text-area-content">
                        {ktitle.map((el, index) => (
                            <div className="text-area-text">
                                <p className="bold_p">{ktitle[index]}</p>
                                <p className="info_p">{ksubTitle[index]}</p>
                            </div>
                        ))}
                    </div>
                    {figarea ? <FigmaContainerArea linkFigma={linkFigma} linkFigjam={linkFigjam} /> : null}
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