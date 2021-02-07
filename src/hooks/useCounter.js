import  { useState } from 'react'

const useCounter = (initial,min,max) => {
    const [count, setcount] = useState(initial)

    const countUp=()=>{
        setcount(prevState=>
            prevState>=max?min:prevState+1
        );
    }

    const countDown=()=>{
        setcount(prevState=>
            prevState>min?prevState-1:max
        );
    }

    return {count, countDown, countUp}
}

export default useCounter

