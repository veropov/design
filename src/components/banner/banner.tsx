import { NavLink } from 'react-router-dom';
import {Button} from '../button/button';


const button = new Button(
    'Посмотреть все работы',
    'title_button_banner',
    'button_banner',
)

export class Banner {
    title: String;
    subTitle?: String;
    image?: String

    constructor(title: String, subTitle: String, image: String) {
        this.title = title;
        this.subTitle = subTitle;
        this.image = image;
    }

    BannerDots() {
        return (
            <div className="container_banner">
                <div className="frame_banner">
                    <p className='p_banner'>{this.title}<br />{this.subTitle}</p>
                    <NavLink to={'/project'}>
                        { button.Button() }
                    </NavLink>
                </div>
                <img src={`${this.image}`}/>
            </div>
        )
    }
}

export class StateBanner {
    title: String;
    subTitle?: String;
    subSubTitle?: String;
    image?: String;
    subImage?: String;
    nameImg?: String;

    constructor(title: String, subTitle: String, subSubTitle: String, image: String, subImage: String, nameImg: String) {
        this.title = title;
        this.subTitle = subTitle;
        this.subSubTitle = subSubTitle
        this.image = image;
        this.subImage = subImage;
        this.nameImg = nameImg;
    }

    StateDots() {
        return (
            <div className="container_state_banner">
                <div className="sub_container_state_banner">
                    <div className="frame_state_banner">
                        <p className='p_state_banner'>{this.title}</p>
                        <p className='p_state_light_banner'>{this.subTitle} <br/> {this.subSubTitle}</p>
                    </div>
                    <img className={`${this.nameImg}`} src={`${this.subImage}`}/>
                </div>
                <img className='frame_back' src={`${this.image}`}/>
            </div>
        )
    }
}