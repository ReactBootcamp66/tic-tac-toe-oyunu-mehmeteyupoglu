import {useState} from "react"
import { Square, Game } from "../components"

const Board = () => {

    const squares = Array(9).fill(null)

    const [square, setSquare] = useState(squares)
    console.log(square)
    const [isNext, setNext] = useState(true)

    const handleClick = (i) => {
        
        const newSquare = square.slice()

        if (selectWinner(square) || square[i]) {
            return 
        }
        newSquare[i] = isNext ? 'X' : 'O'
        setSquare(newSquare)
        setNext(!isNext)
    }

    const resetGame = () => {
        setSquare(squares)
        setNext(true)
    }
    const renderSquare = (i) => {
        return (
            <Square value={square[i]} onClick={() => handleClick(i)}/>
        )
    }

    const selectWinner = (square) => {
        const checkList = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8],
            [0, 4, 8], 
            [2, 4, 6]
        ]

        for (let i = 0; i < checkList.length; i++){
            const [a, b, c] = checkList[i]
            if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                return square[a]
            }
        }
        return null
    }

    const winner = selectWinner(square)
    console.log(winner)

    let status = ''

    if (winner) {
        status = 'Winner: ' + winner
    } else {
        status = 'Next player: ' + (isNext ? 'X' : 'O')
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
            <Game onClick={() => resetGame()}/>
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
    background: 'rgb(44 93 191)', 
    borderRadius: '5px', 
    color: 'white',  
    
}

export default Board