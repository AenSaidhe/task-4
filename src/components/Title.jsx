export default function Title ({ currentPlayer, reset, winner }) {
    console.log(winner)
    return (
        <div>
            Сейчас ход {currentPlayer}
            <p>
                {
                    winner && <>Победитель: {winner}</>
                }
            </p>

            <button onClick={reset}>Начать заново</button>
        </div>
    )
}