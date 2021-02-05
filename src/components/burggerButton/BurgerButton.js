import React from 'react'
import burgerIcon from '../../assets/images/icon-hamburger.svg'
import closeIcon from '../../assets/images/icon-close.svg'

const BurgerButton = ({isOpen=false,onClick}) => {
    return (
        <button className="w-6 h-6 mx-4" onClick={onClick}>
            <img src={isOpen?closeIcon:burgerIcon} className="w-full object-cover" alt="menu"/>
        </button>
    )
}

export default BurgerButton