import { useEffect, useRef, useState } from "react"
import modalProj from '../components/lottie/animation/modal.json';
import modalProjPet from '../components/lottie/animation/modal_pet.json';
import {Button} from '../components/button/button';

import Lo from '../style/assets/img/IeOXLE49ZsTul0kCRk8KHfn4JjhEKUii43Suk1bYoWxjHHt7-alhvY5yPZX4W6JSsU-dK6p3.jpg'
import  Lottie  from "lottie-react";

export default function MainProject(title: String, subTitle: String, type: String, typeBool: boolean, gitHub: boolean, figma: boolean, ux: boolean, ui: boolean, it: boolean, link: string, img: string, itPage: boolean) {


    //Кнопка
    const buttonMainProj = new Button(
        'Посмотреть',
        'title_button_main_proj',
        'button_main_proj'
    );


    function typeB() {
        if (typeBool === true) {
            return 'type_project'
        } else return 'type_project_false'
    }

    const svgProj = [
        (<svg width="12" className='svg_inactive_proj' viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke='#333333'>
        <path d="M1.775 17.6812L0.6875 25.3125L8.31875 24.225L24.9937 7.55C25.4187 7.125 25.4187 6.43125 24.9937 6.00625L19.9937 1.00625C19.5687 0.58125 18.875 0.58125 18.45 1.00625L1.775 17.6812Z" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.4126 16.5875L22.4938 3.50626" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.7749 17.6812L8.31865 24.225" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>),
        (<svg width="12" className='svg_inactive_proj' viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke='#333333'>
            <path d="M7.5687 16.8437C6.69995 16.4062 5.6687 16.2937 4.7312 16.6C3.7562 16.9187 2.96245 17.6937 2.58745 18.65C2.27495 19.4375 2.2812 20.2937 2.26245 21.125C2.23745 21.9562 2.16245 22.8 1.7187 23.525C1.5937 23.725 1.44995 23.9125 1.28745 24.0812C1.1937 24.175 1.09995 24.2687 0.999954 24.35C0.981204 24.3687 0.837454 24.4687 0.843704 24.4812C0.849954 24.4937 0.912454 24.5125 0.924954 24.5125C0.987454 24.5375 1.04995 24.5562 1.11245 24.575C1.6437 24.7312 2.1937 24.825 2.7437 24.8812C3.5812 24.9625 4.43745 24.9312 5.26245 24.7625C6.24995 24.5625 7.18745 24.15 7.98745 23.5312C8.2062 23.3625 8.4187 23.175 8.61245 22.9812C9.41245 22.1812 9.77495 21.0062 9.66245 19.8875C9.6187 19.4562 9.5062 19.0375 9.32495 18.6562" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.33745 15.4999L7.5437 16.8875C7.5437 16.8875 7.8312 17.425 8.33745 17.9312C8.9062 18.5062 9.3187 18.6625 9.3187 18.6625L11 17.7437" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.9999 17.7438C17.0249 14.5 26.3062 2.43751 25.0374 1.16876C23.9499 0.0812557 11.7062 9.18126 8.4624 15.2063"  stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.98111 18.3687C4.53111 18.6437 4.18736 19.0687 4.01236 19.575C3.85611 20.0312 3.84986 20.525 3.86236 21.0187" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>),
        (<svg width="12" className='svg_inactive_proj' viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke='#333333'>
            <path d="M11.2251 3.3125L1.9876 12.6812C1.8876 12.7812 1.8876 12.95 1.9876 13.0562L11.3626 22.625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.85 3.3125L26.0938 12.6812C26.1938 12.7812 26.1938 12.95 26.0938 13.0562L16.7188 22.625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>),
    ]

    const svgDop = [
        (<svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_419_1604)">
                <path d="M4.34498 24.5C6.74234 24.5 8.68802 22.708 8.68802 20.5V16.5H4.34498C1.94763 16.5 0.00195312 18.292 0.00195312 20.5C0.00195312 22.708 1.94763 24.5 4.34498 24.5Z" fill="#0ACF83"/>
                <path d="M0.00195312 12.5C0.00195312 10.292 1.94763 8.5 4.34498 8.5H8.68802V16.5H4.34498C1.94763 16.5 0.00195312 14.708 0.00195312 12.5Z" fill="#A259FF"/>
                <path d="M0.00146484 4.5C0.00146484 2.292 1.94714 0.5 4.3445 0.5H8.68753V8.5H4.3445C1.94714 8.5 0.00146484 6.708 0.00146484 4.5Z" fill="#F24E1E"/>
                <path d="M8.68799 0.5H13.031C15.4284 0.5 17.3741 2.292 17.3741 4.5C17.3741 6.708 15.4284 8.5 13.031 8.5H8.68799V0.5Z" fill="#FF7262"/>
                <path d="M17.3741 12.5C17.3741 14.708 15.4284 16.5 13.031 16.5C10.6337 16.5 8.68799 14.708 8.68799 12.5C8.68799 10.292 10.6337 8.5 13.031 8.5C15.4284 8.5 17.3741 10.292 17.3741 12.5Z" fill="#1ABCFE"/>
            </g>
            <defs>
            <clipPath id="clip0_419_1604">
            <rect width="17.3756" height="24" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
            </defs>
        </svg>),
        (<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3755 0C5.74549 0 0.375488 5.14625 0.375488 11.5C0.375488 16.5887 3.81049 20.8869 8.58049 22.4106C9.18049 22.5112 9.40549 22.1663 9.40549 21.8644C9.40549 21.5913 9.39049 20.6856 9.39049 19.7225C6.37549 20.2544 5.59549 19.0181 5.35549 18.3712C5.22049 18.0406 4.63549 17.02 4.12549 16.7469C3.70549 16.5312 3.10549 15.9994 4.11049 15.985C5.05549 15.9706 5.73049 16.8187 5.95549 17.1637C7.03549 18.9031 8.76049 18.4144 9.45049 18.1125C9.55549 17.365 9.87049 16.8619 10.2155 16.5744C7.54549 16.2869 4.75549 15.295 4.75549 10.8962C4.75549 9.64563 5.22049 8.61062 5.98549 7.80562C5.86549 7.51813 5.44549 6.33937 6.10549 4.75812C6.10549 4.75812 7.11049 4.45625 9.40549 5.93688C10.3655 5.67813 11.3855 5.54875 12.4055 5.54875C13.4255 5.54875 14.4455 5.67813 15.4055 5.93688C17.7005 4.44188 18.7055 4.75812 18.7055 4.75812C19.3655 6.33937 18.9455 7.51813 18.8255 7.80562C19.5905 8.61062 20.0555 9.63125 20.0555 10.8962C20.0555 15.3094 17.2505 16.2869 14.5805 16.5744C15.0155 16.9337 15.3905 17.6238 15.3905 18.7019C15.3905 20.24 15.3755 21.4762 15.3755 21.8644C15.3755 22.1663 15.6005 22.5256 16.2005 22.4106C20.9405 20.8869 24.3755 16.5744 24.3755 11.5C24.3755 5.14625 19.0055 0 12.3755 0Z" fill="#24292F"/>
        </svg>
        )
    ]

    const titleProj = [
        'UX',
        'UI',
        'IT'
    ]

    //функция появление модал окна
    //функция появление модал окна
    //функция появление модал окна

    const [typePr, setType] = useState(false)
    const [typeActive, setTypeActive] = useState(false)
    const [typeDis, setTypeDis] = useState(false)

    //Функции на изменение хуков
    function typeActiveModal() {
        return setTypeActive(!typeActive)
     }

     function modalDisActive() {
        return setTypeDis(!typeDis)
     }

    //Функция вызова анимации модалки
    function modalAnimation() {
        if (typeBool === true) {
            return (
                <div className={typeDis ? "modal_dis_anim" : "modal_anim"}>
                    <Lottie animationData={modalProj} loop={false} />
                </div>
            )
        } else return (
            <div className={typeDis ? "modal_dis_anim" : "modal_anim"}>
                <Lottie animationData={modalProjPet} loop={false} />
            </div>
        )
    }

    //Функция на изменение хук typePr
    function typeChange() {
        return setType(!typePr)
    }

    const buttonProj = new Button(
        'Закрыть',
        'title_button_proj',
        'button_proj'
    )

    //Функциональный компонент Модал окна
    function ModalProject() {
        if (typeBool === true) { 
            return (
                <div className="modal_proj">
                    <div className="title_modal_proj">
                        <p>Коммерческие проекты под защитой NDA. В моем портфолио работы представлены приближенной копией.</p>
                    </div>
                    <div 
                        className="aga"
                        onClick={function() {
                            typeChange();
                            typeActiveModal()
                            modalDisActive()
                        } }
                    >
                        { buttonProj.Button() }
                    </div>
                </div>
            )
        } else return (
            <div className="modal_proj_false">
                <div className="title_modal_proj">
                    <p>Некоммерческие проекты для отработки навыков дизайна и программирования.</p>
                </div>
                <div 
                    className="aga"
                    onClick={function() {
                        typeChange();
                        typeActiveModal()
                        modalDisActive()
                    } }
                >
                    { buttonProj.Button() }
                </div>
            </div>
        ) 
    }



    //Таймер на появление модал окна
    function Timer() {
        const timerRef = useRef(null as any);

        // таймер срабатывает по клику
        // возвращает функцию typeChange
        function startTimer() {
            timerRef.current = setTimeout(() => {
                typeChange()
            }, 300);
        }

        function disTimer() {
            timerRef.current = setTimeout(() => {
                modalDisActive()
            }, 450);
        }

        return (
            <div 
                className={ typeB() }
                onClick={function() {
                    startTimer();
                    typeActiveModal();
                    disTimer();
                }}
            >{type}</div>
        )
    }

    function loadModal() {
        return typePr ? ModalProject() : null
    }

    const aaa = {
        zIndex: 10
    }

    function loadModalActive() {
        return typeActive ? modalAnimation() : null
    }


    return (
        <div className="cont_head_project">
            { typeDis ?  null : loadModalActive() }
            { loadModal() }
            <div className="head_project">
                <div className="title_project">
                    <p>{title}</p>
                    {Timer()}
                </div>
                <div className="feat_main">
                    {figma ? svgDop[0] : null} {gitHub ? svgDop[1] : null}
                    { ux ?
                        <div className="feat_container"> 
                            <div className="feat_project">
                                <div className='feat_active'>
                                    { svgProj[0] }
                                    <p>{ titleProj[0] }</p>
                                </div>
                            </div>
                        </div> 
                    : null }
                    { ui ?
                        <div className="feat_container"> 
                            <div className="feat_project">
                                <div className='feat_active'>
                                    { svgProj[1] }
                                    <p>{ titleProj[1] }</p>
                                </div>
                            </div>
                        </div>
                    : null }
                    { it ?
                        <div className="feat_container"> 
                            <div className="feat_project">
                                <div className='feat_active'>
                                    { svgProj[2] }
                                    <p>{ titleProj[2] }</p>
                                </div>
                            </div>
                        </div> 
                    : null }
                </div>
                <p className='proj_subTitle'>{subTitle}</p>
            </div>
            <div className="foot_project">
                <div className={itPage ? "img_project_it" : "img_project"}>
                    <img src={img}/>
                </div>
            </div>
            <a href={link}>{buttonMainProj.Button()}</a>
        </div>
    )
}
