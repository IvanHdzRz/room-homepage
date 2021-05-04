
import React from 'react'
import SliderControls from '../sliderControls/SliderControls'
import SlideImage from '../slideImage/SlideImage'
import slides from '../../quotes/slides'
import SliderDescription from '../sliderDescription/SliderDescription'
import useMediaQuery from '../../hooks/useMediaQuery'
import useCounter from '../../hooks/useCounter'

const Slider = () => {
        
    const {count,countDown,countUp} =useCounter(0,0,slides.length-1)
    const isDesktopScreen=useMediaQuery('(min-width: 1024px)')
    const {title,description,imgs,link}=slides[count]

    return (
        <div className="w-full box-border grid grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 lg:grid-cols-5 lg:max-h-vh-2/3 lg:min-h-128">
            <SlideImage currentImage={isDesktopScreen?imgs.desktop:imgs.mobile} />
            <SliderControls onNext={countUp} onPrev={countDown} />
            <SliderDescription title={title} description={description} link={link} />  
        </div>
    )
}

export default Slider
