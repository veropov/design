import { useState } from "react"
import { DropSVG } from "./svg"


export const Action = ({count, modal, argModal, argModalAnim, modalAnim, argBack, back}) => {

    function ArgCount() {
        if (count<=0) {
            return count=0
        } else return count
    }

    const actToggle = () => {
        if (count <= 0) {
            return (
                <div className="button_filter_act">
                    <p className="button_filter_p">Действия</p>
                    <DropSVG />
                </div>
            )
        } else return (
            <div className="button_filter_act_true" onClick={() => {
                argModal(modal)
                argModalAnim(modalAnim)
                argBack(back)
                console.log(modal)
                console.log(modalAnim)
            }}
            >
                <p className="button_filter_p_true">Действия</p>
                <p className="button_filter_p_true">{'('+`${ArgCount()}`+')'}</p>
                <DropSVG />
            </div>
        )
    }

    return (
        actToggle()
    )
}