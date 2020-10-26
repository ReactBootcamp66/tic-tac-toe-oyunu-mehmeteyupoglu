import {useState} from "react"
import { Square } from "../components"

const Board = () => {

    const squares = Array(9).fill(null)

    const [square, setSquare] = useState(squares)
    console.log(square)

    const handleClick = (i) => {
        const newSquare = square.slice()
        newSquare[i] = 'X'
        setSquare(newSquare)
    }

    const renderSquare = (i) => {
        return (
            <Square
            value={square[i]}
            onClick={() => handleClick(i)}
            />
        )
    }

    return (
        <div>
            <div style={styledRow}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div style={styledRow}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div style={styledRow}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

const styledRow = {
    display: 'flex'
}

export default Board