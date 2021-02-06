
import React, { useState } from 'react'
import SliderControls from '../sliderControls/SliderControls'
import SlideImage from '../slideImage/SlideImage'
import slides from '../../quotes/slides'
import SliderDescription from '../sliderDescription/SliderDescription'

const Slider = () => {
        
    //inicia useCOunter
    const [count, setcount] = useState(0)
    
    const handleNext=()=>{
        setcount(prevState=>
            prevState>=slides.length-1?0:prevState+1
        );
    }
    const handlePrev=()=>{
        setcount(prevState=>
            prevState>0?prevState-1:slides.length-1
        );
    }
    //termina useCounter
    const {title,description,imgs,link}=slides[count]

    return (
        <div className="grid  grid-cols-1  m-0 w-full box-border md:grid-rows-1 md:grid-cols-2 lg:grid-cols-5">
            <SlideImage currentImage={imgs.mobile} />
            <SliderControls onNext={handleNext} onPrev={handlePrev} />
            <SliderDescription title={title} description={description} link={link} />  
        </div>
    )
}

export default Slider
