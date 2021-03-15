import React from 'react'
import { Wrapper } from './ControlBar.styles'

interface IControlBarProps {
    onClick: (event: any) => void
}

const ControlBar = (props: IControlBarProps) => {
    return <Wrapper>
        <button onClick={props.onClick}>Start game</button>
    </Wrapper>
}

export { ControlBar }
