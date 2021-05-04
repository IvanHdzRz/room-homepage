import React from 'react'
import arrowGO from '../../assets/images/icon-arrow.svg'

const LinkShopNow = ({link}) => {
    return (
       
        <a href={link} className="flex  space-x-14  w-60 2xl:w-96">
            <div className="uppercase text-xl tracking-widest 2xl:text-3xl">
                Shop Now
            </div>
            <img src={arrowGO} alt="arrow_to_right" className="w-30 object-contain"/>
         </a>
       
        
    )
}

export default LinkShopNow
