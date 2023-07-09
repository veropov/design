import { SmartI } from "../style/smart-svg"


export const SmartUxAreaUI = ({title, bottomText, image}) => {
    return (
        <div className="Smart-ui-area">
            <div className="Smart-ui-content">
                <p className="Smart-ui-content-text-title">{title}</p>
                <div className="Smart-ui-content-bottom">
                    <div className="Smart-ui-content-bottom-back">
                        <SmartI />
                    </div>
                    <p className="Smart-ui-content-bottom-text">{bottomText}</p>
                </div>
                </div>
            <div className="Smart-ui-tralling">
                <div className="Smart-ui-tralling-back">
                    <img src={`${image}`}/>
                </div>
            </div>
        </div>
    )
}