import { useState } from 'react'

const DemoState = () => {

    const [count, setCount] = useState(0);
    const handleClick = () => {

        setCount(count + 1);
    }

    return (
        <>
            <h3>useState</h3>
            <p>The increment value {count}</p>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}

export default DemoState;
