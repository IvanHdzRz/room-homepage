import React from 'react'
import LinkShopNow from '../linkShopNow/LinkShopNow'
import Quote from '../quote/Quote';

const SliderDescription = ({title, description,link}) => {
    return (
        <div className="py-16 px-8 space-y-4 box-border	row-start-2 row-end-3"> 
            <h2 id="title_hero_description" className="font-semibold text-2xl">
                {title}
            </h2>
            {/* <p className="text-gray-400">
              {description}  
            </p> */}
            <Quote >
                {description}
            </Quote>

            <LinkShopNow link={link}/>
        </div>
    )
}

export default SliderDescription;
