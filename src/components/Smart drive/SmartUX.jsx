import { SmartFigma, SmartI, SmartPlayer, SmartSyte, SmartUJM } from "./style/smart-svg"

export const SmartUxAreaUJM = ({img, title, subTitle, bottomText}) => {
    return (
        <div className="Smart-ux-area">
            <div className="Smart-ux-area-area">
                <div className="Smart-ux-leading">
                    {img}
                </div>
                <div className="Smart-ux-content">
                    <div className="Smart-ux-content-text">
                        <p className="Smart-ux-content-text-title">{title}</p>
                        <p className="Smart-ux-content-text-subtitle">{subTitle}</p>
                    </div>
                    <div className="Smart-ux-content-bottom">
                        <div className="Smart-ux-content-bottom-back">
                            <SmartI />
                        </div>
                        <p className="Smart-ux-content-bottom-text">{bottomText}</p>
                    </div>
                </div>
                <div className="Smart-ux-tralling">
                    <div className="Smart-ux-tralling-back">
                        <SmartFigma />
                    </div>
                    <div className="Smart-ux-tralling-back">
                        <SmartPlayer />
                    </div>
                    <div className="Smart-ux-tralling-back">
                        <SmartSyte/>
                    </div>
                </div>
            </div>
        </div>
    )
}

