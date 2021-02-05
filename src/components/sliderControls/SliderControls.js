import React from 'react'
import ButtonSlider from '../buttonSlider/ButtonSlider'
import arrowPrev from '../../assets/images/icon-angle-left.svg'
import arrowNext from '../../assets/images/icon-angle-right.svg'

const SliderControls = ({onNext, onPrev}) => {
    return (
        <div id="slider_btns" className="flex flex-row row-start-1 row-end-2 col-start-1 col-span-1 justify-self-end self-end z-10">
            <ButtonSlider icon={arrowPrev} onClick={onPrev} />
            <ButtonSlider icon={arrowNext} onClick={onNext} />
        </div>
    )
}

export default SliderControls
