import React, { useState } from 'react'
import BurgerButton from '../burggerButton/BurgerButton'
import Logo from '../logo/Logo'
import NavLink from '../navLink/NavLink'

const NavBar = () => {
    const [state, setstate] = useState('initial')

    const handleClickBurger=()=>{
        setstate(prevState=>prevState==='open'?'close':'open')
    }
    return (
        <div 
            className={`
                w-screen py-8 grid grid-cols-6 fixed top-0 z-20 items-center
                ${state==='open'?'bg-white':''}
                transition duration-500 ease-in-out
            `}
        >
            <BurgerButton isOpen={state==='open'} onClick={handleClickBurger} />
            <Logo isOpen={state==='open'} />
            
            <div className={`${state==='open'?'flex justify-evenly':'hidden'} col-start-2 col-end-7 w-full`}>
                <NavLink anchor="#"  name="home"/>
                <NavLink anchor="#"  name="shop"/>
                <NavLink anchor="#about"  name="about"/>
                <NavLink anchor="#"  name="contact"/>
            </div>
            
        </div>
    )
}


export default NavBar 