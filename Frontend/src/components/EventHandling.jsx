import React, { useState } from 'react'
import { enqueueSnackbar } from 'notistack'
const EventHandling = () => {
    const [count, setCount] = useState(0)
    const handleButtonClick = () => {
        //alert('Why are you disturbing me?? ')
        enqueueSnackbar('Why are you disturbing me?? ')
    }
    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }
    const handleReset = () => {
        setCount(0)
    }
    return (
        <div>
            <h1>Event Handling Example</h1>
            <button onClick={handleButtonClick} className='btn btn-primary'>Click Me</button>
            <section className='mt-5'>
                <h2>Count Handling</h2>
                <h4>Number of counts: {count} </h4>
                <div className="button-container">
                    <button onClick={handleIncrement} className="btn btn-primary">Increase</button>
                    <button onClick={handleDecrement} className="btn btn-danger">Decrese</button>
                    <button onClick={handleReset} className="btn btn-warning">Reset</button>
                </div>
            </section>
        </div>
    )
}

export default EventHandling 