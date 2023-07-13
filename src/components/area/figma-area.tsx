import { useState } from "react"
import { FigjamArea } from "./area img/area-svg"
import { FigmaArea } from "./area img/area-svg"


export const FigmaContainerArea = () => {

    const figmaImg = [
        <FigmaArea />,
        <FigjamArea />
    ]

    const [figma, setFigma] = useState({
        obj: [{id: 1}, {id:2}],
        active: null,
        hover: null
    })


    function FigmaHover(index: number) {
        return setFigma({...figma, active: figma.obj[index]} as any)
    }


    function FigmaDisHover() {
        return setFigma({...figma, active: null})
    }

    function styleFigma(index: number) {
        if (figma.active === figma.obj[index]) {
            return 'sub_figma_hiddden'
        } else return 'sub_figma_hiddden_none'
    }

    function styleFigmaBorder(index: number) {
        if (figma.active === figma.obj[index]) {
            return 'sub_figma_border'
        } else return 'sub_figma_border_none'
    }
    

    function kekFigma(index: number) {
        return window.setTimeout(() => {
            setFigma({...figma, active: figma.obj[index], hover: figma.obj[index]} as any)
        }, 150)
    }

    function diskekFigma() {
        return window.setTimeout(() => {
            setFigma({...figma, hover: null, active: null})
        }, 150)
    }

    function stylekekFigma(index: number) {
        if (figma.hover === figma.obj[index]) {
            return 'sub_figma_kek'
        } else return 'sub_figma_kek_none'
    }


    return (
        <div className="text_f-f">
            {figma.obj.map((el, index) => (
            <div className="text_area_figma"
                onMouseEnter={() => (
                    FigmaHover(index),
                    kekFigma(index)
                )}
                onMouseLeave={() => (
                    FigmaDisHover(),
                    diskekFigma()
                )}
            >
                <div className="figma_figjam">{figmaImg[index]}</div>
                <div className={styleFigmaBorder(index)}></div>
                <div className={stylekekFigma(index)}></div>
                <div className={styleFigma(index)}></div>
            </div>
            ))}
        </div>
    )

}