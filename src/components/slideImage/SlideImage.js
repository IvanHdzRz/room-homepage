import React from 'react'

const SlideImage = ({currentImage}) => {
    return (
        <div className="w-full m-0 row-start-1 row-end-2 col-start-1 col-span-1 z-0">
            <img src={currentImage} alt="chair" className="w-full"/>
        </div>
    )
}
 export default SlideImage