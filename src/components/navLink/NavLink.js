import React from 'react'

const NavLink = ({anchor,name}) => {
    return (
        <a href={anchor} className="font-bold w-full ">
            {name}
        </a>
    )
}

export default NavLink;