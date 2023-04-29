import React from 'react'

const Timer = (props) => {

    const [seconds, setSeconds] = React.useState(props.start) //destructured version 

    
    //setTimeout() in NOT a good practice, used only for learning purposes, useEffect is better
    setTimeout(() => {
        setSeconds((previousSecond) => previousSecond + 1) // This is called 'updater function'
    }, 1000)

    return (
        <div>
            <h2>Timer</h2>
            Time: {seconds}s
        </div>
    )
}

export default Timer