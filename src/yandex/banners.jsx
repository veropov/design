import YandBannerData from './component yand/banners-data';


export const bannerYandex = YandBannerData.bannerData.map((obj) => {
    return (
        <div className='yand_banner_main' style={obj.style}>
            <div className='yand_banner_text'>
                <div className='yand_banner_title'>
                    <p className='yand_banner_title_p'>{obj.title}</p>
                </div>
                <div className='yand_banner_title_subtitle'>
                    <p className='yand_banner_title_bold'>{obj.subTitleBold}</p>
                    <p className='yand_banner_title_light'>{obj.subTitleLight}</p>
                </div>
            </div>
            <div className='yand_banner_img'>
                <img src={obj.img}/>
            </div>
        </div>
    )
})