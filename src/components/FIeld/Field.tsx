import React, { useEffect, useState } from 'react'
import { Wrapper } from './Field.styles'
import { Battlefield } from '../Battlefield/Battlefield'

import { BattleshipsGame, IShip } from '../../BattleshipsGame/Api'
import { ControlBar } from '../ControlBar/ControlBar'

const battlefieldInstance = new BattleshipsGame()

const Field = () => {

    const [ships, setShips] = useState<IShip[]>([])
    const [size, setSize] = useState<number>(10)

    useEffect(() => {
        startGame()
    }, [])

    const startGame = () => {
        battlefieldInstance.startGame('jack')
        const { size, ships } = battlefieldInstance.startGame('john')
        console.log(ships)
        setShips(ships)
        setSize(size)
    }

    return <Wrapper>
        <Battlefield size={size} ships={ships}/>
        <ControlBar onClick={() => {
            startGame()
        }}/>
    </Wrapper>
}

export { Field }
