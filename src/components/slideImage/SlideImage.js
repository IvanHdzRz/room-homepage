import React from 'react'

const SlideImage = ({currentImage}) => {
    return (
        <div className="w-full m-0">
            <img src={currentImage} alt="chair" className="w-full"/>
        </div>
    )
}
 export default SlideImage