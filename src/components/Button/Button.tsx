import React, { MouseEventHandler } from 'react'

import { StyledButton } from './Button.styles'

interface IButtonProps {
    label: string
    isDisabled: boolean
    onClick: MouseEventHandler
}

const Button = (props: IButtonProps) => {
    return <StyledButton onClick={props.onClick} disabled={props.isDisabled}>{props.label}</StyledButton>
}

export { Button }
