
import React, { useEffect, useRef, useState } from 'react'
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
    const [animation, setanimation] = useState('animate-fade')
    const slidesInterval = useRef(null)

    const handleNext=()=>{
        setTimeout(()=>{countUp()},1000)
        setanimation('animate-fadeout')
    }
    const handlePrev=()=>{
        setTimeout(()=>{countDown()},1000)
        setanimation('animate-fadeout')
    }
    useEffect(() => {

        setanimation(prev=>prev==='animate-fade'?'animate-faded':'animate-fade')
    }, [count])
    useEffect(() => {
        slidesInterval.current= setInterval(()=>{handleNext()},10000)
        return () => {
            clearInterval(slidesInterval.current)
        }
    }, [])

    return (
        <div className="w-full box-border grid grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 sm:min-h-112 lg:grid-cols-5 lg:min-h-vh-2/3 ">
            <div className="w-full flex  flex-row justify-center flex-nowrap m-0 row-start-1 row-end-2 col-start-1 col-span-1 z-0 sm:col-start-1 sm:col-end-2 lg:col-start-1 lg:col-end-4 ">
                <img src={isDesktopScreen?imgs.desktop:imgs.mobile} alt="chair" className={`${animation} min-w-full h-full object-cover object-left`}/>
            </div>
            {/* <SlideImage currentImage={isDesktopScreen?imgs.desktop:imgs.mobile} /> */}
            <SliderControls onNext={handleNext} onPrev={handlePrev} />
            <SliderDescription title={title} description={description} link={link} />  
        </div>
    )
}

export default Slider
