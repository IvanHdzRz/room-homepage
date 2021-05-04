import React from 'react'
import LinkShopNow from '../linkShopNow/LinkShopNow'
import Quote from '../quote/Quote';

const SliderDescription = ({title, description,link}) => {
    return (
        <div className="
            flex flex-col justify-center items-center box-border row-start-2 row-end-3 
            sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3 sm:min-h-128 
            lg:col-start-4 lg:col-end-6 
        "> 
            <div className="px-8 py-8 space-y-4 xl:px-16 xl:py-16">
                <h2 id="title_hero_description" className="font-semibold text-2xl 2xl:text-3xl">
                    {title}
                </h2>
            
                <Quote >
                    {description}
                </Quote>

                <LinkShopNow link={link}/>
            </div>
        </div>
    )
}

export default SliderDescription;
