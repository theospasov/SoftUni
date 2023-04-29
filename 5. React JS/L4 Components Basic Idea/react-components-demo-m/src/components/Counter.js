import { useState } from "react"

const getTitle = (count) => {
    switch(count) {
        case 1: return 'First Blood';
        case 2: return 'Double Kill';
        case 3: return 'Tripple Kill';
        case 4: return 'Multi Kill';
        case 5: return 'Unstoppable'; 
        default: return 'Counter'
    }
}

const Counter = (props) => {

    const [counter, setCounter] = useState(0)
    // const [title, setTitle] = useState('Counter')

    const onClickIncrement = (e) => {
        // console.log(e); // SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}
        setCounter(counter => counter + 1)
    }

    const onClickDecrement = (e) => {
        setCounter(counter => counter - 1)
    }

    const onClickClear = () => {
        setCounter(0)
    }

    // let title = 'Counter'
    // if (counter == 1) {
    //     title = 'First Blood'
    // } else if (counter == 2){
    //     title = 'Double Kill'
    // }

    return (
        <div>
            <p style={{fontSize: Math.max(counter, 1) + 'em'}}>
                {counter > 5 ? 'Godlike' : getTitle(counter)}: {counter}
            </p>
            {counter < 10
                ? <button onClick={onClickIncrement}>+</button>
                : null
            }
            <button onClick={onClickDecrement}>-</button>
            {props.resetAllowed && <button onClick={onClickClear}>clear</button>} {
                // if props.resetAllowed is true, the button will show up
            }
            

        </div>

    )

}

export default Counter