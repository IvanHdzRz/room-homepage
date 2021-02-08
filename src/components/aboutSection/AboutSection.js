import React from 'react'
import darkImg from '../../assets/images/image-about-dark.jpg'
import lightImg from '../../assets/images/image-about-light.jpg'
import Quote from '../quote/Quote'
const AboutSection = () => {
    return (
        <div id="about" className="flex flex-col items-center  md:grid md:grid-rows-2 md:grid-cols-2 lg:grid-cols-7 lg:grid-rows-1 lg:max-h-vh-1/3 lg:min-h-56">
            <div className="flex w-full h-full md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2">
                <img src={darkImg} className="object-cover w-full h-full" alt="dark couch"/>
            </div>
            <div className="flex flex-col p-8 h-full justify-center box-border space-y-4 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-2 ">
                <h3 className="font-bold text-xl uppercase">
                    About our forniture
                </h3>
                <Quote >
                    Our multifunctional collection blends design and
                    function to suit your individual taste. Make each room unique, or
                    pick a cohesive theme that best express your insterest and what
                    inspires you. Find the furniture pieces you need from traditional to
                    contemporary styles or anything in between. Product specialist are aviable to
                    help you create your dreams space.
                </Quote>
            </div>
            <div className="flex w-full h-full lg:col-start-6 lg:col-end-8 lg:row-start-1 lg:row-end-2" >
                <img src={lightImg} className="object-cover w-full h-full" alt="white couch"/>
            </div>     
        </div>
    )
}
export  default AboutSection