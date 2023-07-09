import { useState } from "react";
import { Button } from "../button";

const buttonWatch = new Button(
    'Найти',
    'button_search_p',
    'button_search'
);


const Tours = () => {

const [modal, setModal] = useState({
    active: null,
    obj: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
})

function modalAnim() {
    if (modal.obj[0] === modal.active) {
        return 'modal_fun_sun_1'
    } else return 'modal_fun_sun_none'
}


    return (
        <div className="search_filter">
            <div className="hotel">
                <div className="hotel_container_1">
                    <div className="search_filter_block-1">
                        <p>Куда</p>
                        <div className="form_input">
                            <input type='text' className="input_search" placeholder="Турция"></input>
                        </div>
                    </div>
                </div>
                <div className="search_filter_block-2"
                    onClick={() => {
                        setModal({...modal, active: modal.obj[1] as any})
                    }}
                >
                    <div className="search_filter_space">
                        <p>Дата заезда</p>
                        <p className="search_p_value">6 июля</p>
                    </div>
                    <div></div>
                </div>
                <div className="search_filter_block-3"
                    onClick={() => {
                        setModal({...modal, active: modal.obj[2] as any})
                    }}
                >
                    <p>Длительность</p>
                    <p className="search_p_value">7 ночей</p>
                </div>
                <div className="search_filter_block-4"
                    onClick={() => {
                        setModal({...modal, active: modal.obj[3] as any})
                    }}
                >
                    <p>Туристы</p>
                    <p className="search_p_value">2 взрослых</p>
                </div>
            </div>
            {buttonWatch.Button()}
        </div>
    )
}

export default Tours;