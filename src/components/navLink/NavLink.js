import React from 'react'

const NavLink = ({anchor,name}) => {
    return (
        <a href={anchor} className="font-bold text-sm">
            {name}
        </a>
    )
}

export default NavLink;