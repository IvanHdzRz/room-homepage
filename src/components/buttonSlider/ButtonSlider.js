import React from 'react'

const ButtonSlider = ({icon,onClick=()=>{console.log('uwu')}}) => {
    return (
        <button 
            className="bg-black flex justify-center items-center w-16 h-16 active:bg-gray-600"
            onClick={onClick}
        >
                <img  src={icon} alt="icon"/>
        </button>
    
    )
}

export default ButtonSlider
