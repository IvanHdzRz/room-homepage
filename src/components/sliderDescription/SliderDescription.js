import React from 'react'
import LinkShopNow from '../linkShopNow/LinkShopNow'

const SliderDescription = ({title, description,link}) => {
    return (
        <div className="py-16 px-8 space-y-4 box-border	"> 
            <h2 id="title_hero_description" className="font-semibold text-2xl">
                {title}
            </h2>
            <p className="text-gray-400">
              {description}  
            </p>

            <LinkShopNow link={link}/>
        </div>
    )
}

export default SliderDescription;
