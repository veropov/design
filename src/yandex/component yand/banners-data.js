import img1 from '../style/assets/orig.png';
import img2 from '../style/assets/orig (1).png';
import img3 from '../style/assets/orig (2).png';

class YandBannerData {

    bannerData = [ 
        {
            title: 'Мультирум',
            subTitleBold: 'Если у вас несколько разных колонок',
            subTitleLight: 'Включите одну песню сразу во всех комнатах — например, когда убираетесь в квартире.',
            img: img1,
            style: {marginTop: '100px'}
        },
        {
            title: 'Стереопара',
            subTitleBold: 'Если есть две одинаковых колонки',
            subTitleLight: 'Соберите из них стереопару — и слушайте музыку в полном объёме.',
            img: img2,
            style: {marginTop: '0px'}
        },
        {
            title: 'Эквалайзер',
            subTitleBold: 'Если хочется больше басов',
            subTitleLight: 'Настройте звук в приложении Дом с Алисой — колонка будет звучать, как скажете.',
            img: img3,
            style: {marginTop: '100px'}
        },
    ]
}

export default new YandBannerData;