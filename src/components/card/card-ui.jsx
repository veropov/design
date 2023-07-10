

export const CardUi = ({title, subTitle, img}) => {

    return (
        <div className="card-ui-main">
            <div className="card-content">
                <div className="card-text">
                    <p className="card-text-title">{title}</p>
                    <p className="card-text-subTitle">{subTitle}</p>
                </div>
            </div>
            <div className="card-media">
                <img className="smart-reg" src={img} />
            </div>
        </div>
    )
}