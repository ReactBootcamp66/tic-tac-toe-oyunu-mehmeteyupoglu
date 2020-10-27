import {useState} from "react"
import { Square } from "../components"

const Board = () => {

    const squares = Array(9).fill(null)

    const [square, setSquare] = useState(squares)
    const [isNext, setNextPlayer] = useState(true)
    console.log(square)

    const handleClick = (i) => {
        const newSquare = square.slice()
        if (winner(square) || square[i]) {
            return
        }
        newSquare[i] = isNext ? 'X' : 'O'
        setSquare(newSquare)
        setNextPlayer(!isNext)
    }

    const renderSquare = (i) => {
        return (
            <Square
            value={square[i]}
            onClick={() => handleClick(i)}
            />
        )
    }

     

    const winner = (square) => {
        const checkList = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8]
            [0, 4, 8], 
            [2, 4, 6]
        ]

        for (let i = 0; i < checkList.length; i++){
            const [a, b, c] = checkList[i]
            if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                return square[a]
            }
            return null
        }
    }

    const winningPlayer = winner(square)
    let status;

    if (winningPlayer) {
        status = "Winner:  " + winningPlayer
    } else {
        status = "Next player: " + (isNext ? 'X' : 'O')
    }


    return (
        <div >
            <div style={styledStatus} >{status}</div>
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

const styledStatus = {
    margin: '30px 0', 
    padding: '10px 10px', 
    fontSize: '20px', 
    background: 'rgb(27 48 107)', 
    borderRadius: '5px', 
    color: 'white',  
    
}

export default Board