import React from 'react'

const SlideImage = ({currentImage}) => {
    return (
        <div className="w-full h-auto m-0 row-start-1 row-end-2 col-start-1 col-span-1 z-0 md:col-start-1 md:col-end-2 lg:col-start-1 lg:col-end-4 ">
            <img src={currentImage} alt="chair" className="w-full h-full md:object-cover "/>
        </div>
    )
}
 export default SlideImage