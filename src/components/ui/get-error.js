import React, { useEffect, useState } from 'react'

export const GetError = () => {
    const [counter, setInc] = useState(0)

    useEffect(()=>{
        if(counter === 2) throw new Error('I crashed!');
    },[counter])

    const handleClick = () => {
        setInc(counter + 1)
    }
    return (<button onClick={handleClick}>Get Error</button>)
}
