import { useState } from "react";
import './App.css'
import { FieldLayout } from "./components/FieldLayout.jsx";
import Title from "./components/Title.jsx";

const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

const calculateWinner = (squares) => {
    for (let i = 0; i < WIN_PATTERNS.length; i++) {
        const [a,b,c] = WIN_PATTERNS[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}

function App() {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [fields, setFields] = useState(Array(9).fill(''));
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const winner = calculateWinner(fields)

    const handleClick = (index) => {
        if (fields[index] || winner) {
            return
        }
        if (winner) {
            setIsGameEnded(true)
        }
        if (winner === null) {
            setIsDraw(true)
            setIsGameEnded(true)
        }
        if (currentPlayer === 'X') {
            fields[index] = 'X'
            setCurrentPlayer('O')
        } else {
            fields[index] = 'O'
            setCurrentPlayer('X')
        }
    }

    const reset = () => {
        setCurrentPlayer('X')
        setFields(Array(9).fill(''))
        setIsGameEnded(false)
        setIsDraw(false)
    }

    return (
        <main>
            <Title currentPlayer={currentPlayer} winner={winner} reset={reset} />
            <FieldLayout currentPlayer={currentPlayer}
                         setCurrentPlayer={setCurrentPlayer}
                         handleClick={handleClick}
                         fields={fields}
            />
        </main>
    )
}

export default App
