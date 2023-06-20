import { Colors } from "../Colors";
import logo from '../../assets/black__king.svg'
import { Cell } from "../cell";

export enum FigureNames {
    FIGURE = "Фигура",
    KING = "Король",
    QUEEN = "Ферзь",
    PAWN = "Пешка",
    KNIGHT = "Конь",
    ROOK = "Ладья",
    BISHOP = "Слон",
}

export class Figure {
    color: Colors
    logo: typeof logo | null
    cell: Cell
    name: FigureNames
    id: number

    constructor(color: Colors, cell: Cell) {
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = null
        this.name = FigureNames.FIGURE
        this.id = Math.random()

    }

    canMove(target: Cell): boolean {
        if(target.figure?.color === this.color){
            return false
        }
        if(target.figure?.name === FigureNames.KING){
            return false
        }
        return true
    }
    moveFigure(target: Cell) {

    }
}