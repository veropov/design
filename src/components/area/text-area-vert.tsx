interface TextProps {
    name: String,
    title: String,
    subTitle: String,
    title2: String,
    subTitle2: String,
    title3: String,
    subTitle3: String,
}

export const TextAreaVert1 = ({name, title, subTitle} : TextProps) => {

    const ktitle = [
        title
    ]

    const ksubTitle = [
        subTitle
    ]

    return (
        <div className="sub_cont">
            <p className='title_cont_smart'>{name}</p>
            <div className="text-area-main">
                <div className="text-area-content">
                    <div className="text-area-text">
                        <p className="bold_p">{ktitle[0]}</p>
                        <p className="info_p">{ksubTitle[0]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const TextAreaVert2 = ({name, title, subTitle, title2, subTitle2} : TextProps) => {

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
            <div className="text-area-main">
                {ktitle.map((el, index) => (
                    <div className="text-area-content">
                        <div className="text-area-text">
                            <p className="bold_p">{ktitle[index]}</p>
                            <p className="info_p">{ksubTitle[index]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const TextAreaVert3 = ({name, title, subTitle, title2, subTitle2, title3, subTitle3} : TextProps) => {

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
            <div className="text-area-main">
                <div className="text-area-content">
                    {ktitle.map((el, index) => (
                        <div className="text-area-text">
                            <p className="bold_p">{ktitle[index]}</p>
                            <p className="info_p">{ksubTitle[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}