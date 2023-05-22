import React from "react"

export default function Box(props) {
    
    const [colorChange, setColorChange] = React.useState(props.on)
    
    function flipColor() {
        setColorChange(previusState => !previusState)
    }
    //console.log(colorChange)
    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */
    const styles = {
        backgroundColor: colorChange ? "#222222" : "transparent"
    }
    
    return (
        <div style={styles} className="box" onClick={flipColor}></div>
    )
}