import React from 'react'
import darkImg from '../../assets/images/image-about-dark.jpg'
import lightImg from '../../assets/images/image-about-light.jpg'
import Quote from '../quote/Quote'
const AboutSection = () => {
    return (
        <div className="flex flex-col">
            <div className="flex w-full">
                <img src={darkImg} className="object-cover w-full" alt="dark couch"/>
            </div>
            <div className="flex flex-col py-16 px-8 space-y-4">
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
            <div className="flex w-full">
                <img src={lightImg} className="object-cover w-full" alt="white couch"/>
            </div>     
        </div>
    )
}
export  default AboutSection