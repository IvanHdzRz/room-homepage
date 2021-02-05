import React from 'react'
import logo from '../../assets/images/logo.svg'

const Logo = ({isOpen=false}) => {
    return (
        <div className={`${isOpen?'hidden':''} col-start-3 col-span-2 w-20 justify-self-center self-center flex`}>
            <a href="./" >
                <img src={logo} alt="logo" className="w-full " />
            </a>    
        </div>
        
    )
}

export default Logo
