import { Colors } from "../Colors";
import { Cell } from "../cell";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black__rook.svg'
import whiteLogo from '../../assets/white__rook.svg'

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.ROOK
    }
    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }
        if (this.cell.isEmptyHorizontal(target))
            return true
        if (this.cell.isEmptyVertical(target))
            return true
        return false
    }
}