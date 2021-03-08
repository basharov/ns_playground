import React, { useState } from 'react'

import { Button } from '../Button/Button'
import { Value, Wrapper } from './Counter.styles'

interface IButtonProps {
    initialValue: number
}

const Counter = (props: IButtonProps) => {
    const [counterValue, setCounterValue] = useState(props.initialValue)

    const incrementCounter = () => {
        setCounterValue(counterValue + 1)
    }

    const decrementCounter = () => {
        setCounterValue(counterValue - 1)
    }

    return <Wrapper>
        <Button onClick={() => decrementCounter()} isDisabled={false} label="-"/>
        <Value>{counterValue}</Value>
        <Button onClick={() => incrementCounter()} isDisabled={false} label="+"/>
    </Wrapper>
}

export { Counter }
