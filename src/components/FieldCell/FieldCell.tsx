import React from 'react'
import { Cell, FilledCell } from './FieldCell.styles'

interface IFieldCellProps {
    row: number
    column: number
    isFilled: boolean
}

export const FieldCell = (props: IFieldCellProps) => {
    return props.isFilled ? <FilledCell>{props.row}X{props.column}</FilledCell> : <Cell/>
}
