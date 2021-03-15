import React from 'react'
import { CellsContainer, Wrapper } from './Battlefield.styles'
import { IShip, Orientation } from '../../BattleshipsGame/Api'
import { FieldCell } from '../FieldCell/FieldCell'

interface IBattlefieldProps {
    ships: IShip[]
    size: number
}

const isFilled = (rowIndex: number, columnIndex: number, ships: IShip[]): boolean => {
    return ships.some((ship) => {
        if (ship.orientation === Orientation.Horizontal && rowIndex === ship.startCell.x && columnIndex >= ship.startCell.x && columnIndex < ship.startCell.x + ship.size) {
            return true
        }

        if (ship.orientation === Orientation.Vertical && columnIndex === ship.startCell.y && rowIndex >= ship.startCell.y && rowIndex < ship.startCell.y + ship.size) {
            return true
        }

        return false
    })
}

const Battlefield = (props: IBattlefieldProps) => {
    const { size, ships } = props

    console.log(ships)
    const cellsRow = new Array(size).fill(0)
    const cellsColumn = new Array(size).fill(0)

    return <Wrapper>
        <CellsContainer>
            {cellsRow.map((cell, rowIndex) => (cellsColumn.map((cell, columnIndex) => (
                <FieldCell row={rowIndex} column={columnIndex} isFilled={isFilled(rowIndex, columnIndex, ships)}/>))))}
        </CellsContainer>
        {/*{ships.map((ship) =>)}*/}
    </Wrapper>
}

export { Battlefield }
