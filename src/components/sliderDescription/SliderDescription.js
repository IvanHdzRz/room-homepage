import React from 'react'
import LinkShopNow from '../linkShopNow/LinkShopNow'
import Quote from '../quote/Quote';

const SliderDescription = ({title, description,link}) => {
    return (
        <div className="py-16 px-8 space-y-4 box-border	row-start-2 row-end-3 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 lg:col-start-4 lg:col-end-6"> 
            <h2 id="title_hero_description" className="font-semibold text-2xl">
                {title}
            </h2>
           
            <Quote >
                {description}
            </Quote>

            <LinkShopNow link={link}/>
        </div>
    )
}

export default SliderDescription;
