import { useEffect, useState } from "react"
import PuzzleOne from "../../Components/Play/PuzzlesOne"
import axios from "axios"

// API endpoint for daily puzzle data
const daily_puzzle_endpoint = "https://lichess.org/api/puzzle/daily"

const Puzzles = () => {

    const [game, setGame] = useState(0)
    const [puzzle, setPuzzle] = useState(0)

    useEffect(() => {

        // Use axios to fetch daily puzzle data
        axios(daily_puzzle_endpoint).then(response => {
            setGame(response.data.game)
            setPuzzle(response.data.puzzle)
        })

        // Catch any errors when fetching data
        .catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div>
            <PuzzleOne game={game} puzzle={puzzle}/>
        </div>
    )
}

export default Puzzles