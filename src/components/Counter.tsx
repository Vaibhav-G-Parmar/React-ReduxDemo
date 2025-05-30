import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store'
import { increment, decrement, incrementByAmount, decrementByAmount, incrementAsync, decrementAsync } from '../state/counter/counterSlice'


const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const disptach = useDispatch<AppDispatch>()

    return(
        <>  
        <h2>{count}</h2>
        <div>
            <button onClick={() => disptach(increment())}>Increment</button>
            <button onClick={() => disptach(decrement())}>Decrement</button>
        </div>
        <br></br>
        <div>
            <button onClick={() => disptach(incrementByAmount(10))}>Increment by 10</button>
            <button onClick={() => disptach(decrementByAmount(10))}>Decrement by 10</button>
        </div>
        <br></br>
        <div>
            <button onClick={() => disptach(incrementAsync(10))}>Increment Async by 10</button>
            <button onClick={() => disptach(decrementAsync(10))}>Decrement Async by 10</button>
        </div>
        </>
    )
}

export default Counter