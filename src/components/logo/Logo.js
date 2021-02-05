import React from 'react'
import logo from '../../assets/images/logo.svg'

const Logo = ({isOpen=false}) => {
    return (
        <div className={`${isOpen?'hidden':''} col-start-3 col-end-5 justify-self-center m-0 w-20`}>
            <a href="./" className="flex justify-center" >
                <img src={logo} alt="logo" className="m-0 " />
            </a>    
        </div>
        
    )
}

export default Logo
