import React from 'react'

const Timer = (props) => {

    //const stateResult = React.useState(0) // un-destructured version; useState() needs initial State/Value;
    /*
    stateResult will be equal to an Array with 2 elements:
    stateResult[0] -> value that we want to save (read-only value)
    stateResult[1] -> setter function that changes the state
    */
    const [seconds, setSeconds] = React.useState(props.start) //destructured version 

    
    //setTimeout() in NOT a good practice, used only for learning purposes, useEffect is better
    setTimeout(() => {
        //setSeconds(seconds + 1)// we use setSeconds to change seconds (because only the setter function can change the value)
        setSeconds((previousSecond) => previousSecond + 1) // This is called 'updater function'. Both it and the previous do the same, but this method is preferred because the "(seconds + 1)" method can cause problems called race conditions

        /* we use the first syntax when we want to set the State to a new STATIC value, like setSeconds(20)
        if we want to have a DYNAMIC value, based on an initial value, we use the second syntax setSeconds(state => state + 1)
        */ 
    }, 1000)

    return (
        <div>
            <h2>Timer</h2>
            Time: {seconds}s
        </div>
    )
}

export default Timer