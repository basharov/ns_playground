import { random, uniq } from 'lodash'

export interface IConfig {
    size: number
    steps: number
    ships: number[]
}

export interface ICoordinates {
    x: number
    y: number
}

export interface IShip {
    orientation: Orientation
    size: number
    startCell: ICoordinates
}

export enum Orientation {
    Vertical = 'vertical',
    Horizontal = 'horizontal'
}

const Config = {
    size: 10,
    steps: 80,
    ships: [5, 4, 3, 2, 2, 1, 1]
}

export class BattleshipsGame {
    ships: IShip[]
    tryCount: number

    constructor () {
        this.ships = []
        this.tryCount = 0
    }

    startGame (userId: string): { size: number, ships: IShip[] } {
        const ships = this.getShipsLayout()
        this.saveGameInStorage(userId, ships)

        return { size: Config.size, ships }
    }

    getShipsLayout () {
        this.ships = []
        for (let shipSize of Config.ships) {
            this.tryToAddShip(shipSize)
        }

        return this.ships
    }

    tryToAddShip (size: number) {
        this.tryCount += 1
        console.log(this.tryCount)

        const shipToPlace: IShip = {
            orientation: Math.random() > 0.5 ? Orientation.Horizontal : Orientation.Vertical,
            size,
            startCell: { x: -1, y: -1 }
        }


        shipToPlace.startCell = this.getStartCell(shipToPlace)
        const isCellAvailable = this.checkCellAvailability(shipToPlace)

        if (isCellAvailable) {
            this.ships.push(shipToPlace)
        } else {
            this.tryToAddShip(size)
        }


    }

    getStartCell (shipToPlace: IShip): ICoordinates {
        let x = -1
        let y = -1

        if (shipToPlace.orientation === Orientation.Horizontal) {
            x = random(Config.size - shipToPlace.size) // 0 to 9
            y = random(Config.size - 1) // 0 to 9
        }

        if (shipToPlace.orientation === Orientation.Vertical) {
            x = random(Config.size - 1) // 0 to 9
            y = random(Config.size - shipToPlace.size) // 0 to 9
        }

        return { x, y }
    }

    getShipCellsCoordinates (ship: IShip): ICoordinates[] {
        let coordinates = []
        for (let i = 0; i < ship.size; i += 1) {
            coordinates.push(ship.orientation === Orientation.Horizontal ?
                { x: ship.startCell.x + i, y: ship.startCell.y } :
                { x: ship.startCell.x, y: ship.startCell.y + 1 }
            )
        }

        return coordinates
    }

    checkCellAvailability (shipToPlace: IShip): boolean {
        const shipCellsCoordinates = this.getShipCellsCoordinates(shipToPlace)

        for (let ship of this.ships) {
            const existingShipCoordinates = this.getShipCellsCoordinates(ship)
            const joinedShipsCoordinates = existingShipCoordinates.concat(shipCellsCoordinates)
            const uniqueJoinedShipsCoordinates = uniq(joinedShipsCoordinates)

            if (joinedShipsCoordinates.length !== uniqueJoinedShipsCoordinates.length) {
                return false
            }
        }

        return true
    }

    saveGameInStorage (userId: string, gameState: any) {
        console.log(`Game state for user ${userId} saved in storage`)
    }

}


const layout = [
    //              x  x  x  x  x
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 0
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 1
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 2
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 3
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 4
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 5
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 6
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 7
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 8
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // 9
]
