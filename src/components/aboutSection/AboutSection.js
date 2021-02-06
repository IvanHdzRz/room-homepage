import React from 'react'
import darkImg from '../../assets/images/image-about-dark.jpg'
import lightImg from '../../assets/images/image-about-light.jpg'
import Quote from '../quote/Quote'
const AboutSection = () => {
    return (
        <div id="about" className="flex flex-col md:grid md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1">
            <div className="flex w-full md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
                <img src={darkImg} className="object-cover w-full" alt="dark couch"/>
            </div>
            <div className="flex flex-col py-16 px-8 space-y-4 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
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
            <div className="flex w-full lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2">
                <img src={lightImg} className="object-cover w-full" alt="white couch"/>
            </div>     
        </div>
    )
}
export  default AboutSection