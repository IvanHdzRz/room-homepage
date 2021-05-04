import React from 'react'

const SlideImage = ({currentImage}) => {
    return (
        <div className="w-full  m-0 row-start-1 row-end-2 col-start-1 col-span-1 z-0 sm:col-start-1 sm:col-end-2 lg:col-start-1 lg:col-end-4 ">
            <img src={currentImage} alt="chair" className="w-full h-full object-cover object-left"/>
        </div>
    )
}
 export default SlideImage