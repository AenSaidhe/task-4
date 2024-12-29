

export default function Title ({ currentPlayer, reset, winner, isGameEnded }) {

    return (
        <h2>
            Сейчас ход {currentPlayer}
            {
                winner && <p>Победитель: {winner}</p>
            }
            <button onClick={reset}>Начать заново</button>
        </h2>
    )
}