import  { useEffect, useState } from 'react'

const useMediaQuery = (mediaQuery) => {
    
    const {matches}=window.matchMedia(mediaQuery)
    const [windowSizeMatched, setwindowSizeMatched] = useState(matches);
    
    useEffect(() => {
        const checkMediaQueryOnReSize=()=>{
            const {matches}=window.matchMedia(mediaQuery)
            
            setwindowSizeMatched(matches)
        }

        window.addEventListener('resize',checkMediaQueryOnReSize)
         
        return ()=>{
            window.removeEventListener('resize',checkMediaQueryOnReSize)
        }
        
    },)

    

    return windowSizeMatched
}


export default useMediaQuery