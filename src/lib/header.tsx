import { useEffect, useState } from "react";

import Lottie from "lottie-react";
import anHome from '../components/lottie/animation/anim_test.json';
import penHome from '../components/lottie/animation/pencil_anim.json';
import codeHome from '../components/lottie/animation/code_anim.json';
import { NavLink } from "react-router-dom";


function Header() {

//Ссылка на стили (смотреть в header.scss)
const active = 'transparent';
const inActive = '#333333';
const backActive = 'header_active';
const backHover = 'header_hover';
const backInactive = 'header_inactive'

const animBox = [
    anHome,
    penHome,
    codeHome
]

const link = [
    '/',
    '/ux',
    '/it'
]

//Добавление Лотти анимации 
function lottieHome(index: any) {
    return (
        <div className="lottie_home">
            <Lottie 
                loop={true} 
                animationData={animBox[index]}
            />
        </div>
    )
}

//Хук на измненение элементов хэдера внутри каждого контейнера, 
//Map состоит из элементов навигации
const [head, setHead] = useState({
    hover: null,
    active: null,
    objects: [{id: 1}, {id: 2}, {id: 3}]
})

//Выбор первого элемента из списка, если не выбран никакой
function Clean() {
    return setHead({...head, active: head.objects[0] as any})
}

//Эффект при загрузке или обновлении страницы
useEffect(() => {
    Clean()
}, []);


//Функция активации каждого элемента внутри Map head по индексу при клике
function toggleHeader(index: any) {
    return setHead({...head, active: head.objects[index] as any, hover: null})
 }

 //Функция активации каждого элемента внутри Map head по индексу при наведении
 function hoverHeader(index: any) {
    if (head.objects[index] === head.active) {
        return null
    }
    else return setHead({...head, hover: head.objects[index] as any})
 }
 
//Функция дизактивации
function disToggleHeader() {
    return setHead({...head, hover: null as any})
}
 
 //Функция изменения бэкграунда иконок в каждом элементе хэдера, 
 //Возвращает стили элементов (смотреть в header.scss)
function toggleHeaderHover(index: any) {
    if (head.objects[index] === head.active) {
        return backActive
    }
    else if (head.objects[index] === head.hover) {
         return backHover
    } 
     else {
         return backInactive
     }
 }
 
//Функция добавления лотти анимации
function lottieHeaderActive(index: any) {
     if (head.objects[index] === head.hover) {
         return (
             lottieHome(index)
         ) 
     } else return null
 }

//Функция изменения цвета иконок, возвращает стили в header.scss 
function titleHeaderHover(index: any) {
     if (head.objects[index] === head.hover) {
         return active
     } else {
         return inActive
     }
 }

let index = [
    0,
    1,
    2,
    3,
    4
];

const titleHeader = [
    'Обо мне',
    'UX',
    'IT',
]

function ImgHeader(index: any) {
    if (head.objects[index] === head.active) {
        return imgBold[index]
    } else {
        return imgHeader[index]
    }
}

const imgBold = [
    (<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6747 13.5375V25.3625H2.32471V13.5375" fill="#333333"/>
        <path d="M0.174805 12.4625V11.3875L11.9998 0.637512L23.8248 11.3875V12.4625" fill="#333333"/>
        <path d="M15.2249 12.4625H8.7749V19.9875H15.2249V12.4625Z" fill="#E2E1F7"/>
    </svg>),
    (<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.775 17.6812L0.6875 25.3125L8.31875 24.225L24.9937 7.55C25.4187 7.125 25.4187 6.43125 24.9937 6.00625L19.9937 1.00625C19.5687 0.58125 18.875 0.58125 18.45 1.00625L1.775 17.6812Z" fill="#333333"/>
        <path d="M9.4126 16.5875L22.4938 3.50626" stroke="#E2E1F7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.7749 17.6812L8.31865 24.225" stroke="#E2E1F7" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>),
    (<svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={titleHeaderHover(index[2])}>
        <path d="M11.2251 3.3125L1.9876 12.6812C1.8876 12.7812 1.8876 12.95 1.9876 13.0562L11.3626 22.625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.85 3.3125L26.0938 12.6812C26.1938 12.7812 26.1938 12.95 26.0938 13.0562L16.7188 22.625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>)
]

const imgHeader = [
    (<svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={titleHeaderHover(index[0])}>
        <path d="M22.6749 14.5375V26.3625H3.32495V14.5375" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.17505 13.4625V12.3875L13 1.63751L24.8251 12.3875V13.4625" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.2251 13.4625H9.77515V20.9875H16.2251V13.4625Z"  stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>),
    (<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={titleHeaderHover(index[1])}>
        <path d="M1.775 17.6812L0.6875 25.3125L8.31875 24.225L24.9937 7.55C25.4187 7.125 25.4187 6.43125 24.9937 6.00625L19.9937 1.00625C19.5687 0.58125 18.875 0.58125 18.45 1.00625L1.775 17.6812Z" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.4126 16.5875L22.4938 3.50626" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.7749 17.6812L8.31865 24.225" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>),
    (<svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={titleHeaderHover(index[2])}>
        <path d="M11.2251 3.3125L1.9876 12.6812C1.8876 12.7812 1.8876 12.95 1.9876 13.0562L11.3626 22.625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.85 3.3125L26.0938 12.6812C26.1938 12.7812 26.1938 12.95 26.0938 13.0562L16.7188 22.625" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>),
]


    return (
        <div className="header">
            <div className="header_about">
                {head.objects.map((elements, index) => (
                    <NavLink to={link[index]}>
                    <div 
                        className='header_cont'
                        key={index} 
                        onClick={() => toggleHeader(index)}
                        onMouseEnter={() => hoverHeader(index)}
                        onMouseLeave={() => disToggleHeader()}
                    >
                        <div className={toggleHeaderHover(index)}>
                            <div className='svg_head'>
                                {ImgHeader(index)}
                            </div>
                            {lottieHeaderActive(index)}
                        </div>
                        <p className="header_p">
                            {titleHeader[index]}
                        </p>
                    </div>
                    </NavLink>
                ))}
            </div>
        </div> 
    )
}

export default Header;

{/* <input name="about" className="radio_header" type="radio" value={valueRadio[index]} checked={radioHeaderActive(index)}/> */}

//  //Функция добавления лотти анимации
// function radioHeaderActive(index: any) {
//     if (head.objects[index] === head.active) {
//         return true
//     } else return false
// }