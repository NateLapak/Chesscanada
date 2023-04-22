import { useEffect, useState } from "react"
import PuzzleOne from "../../Components/Play/PuzzlesOne"
import axios from "axios"

// API endpoint for daily puzzle data
const daily_puzzle_endpoint = "https://lichess.org/api/puzzle/daily"


const Puzzles = () => {

    const [data, setData] = useState()

    useEffect(() => {

        // Use axios to fetch daily puzzle data
        axios(daily_puzzle_endpoint).then(response => {
            setData(response.data)
        })

        // Catch any errors when fetching data
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <PuzzleOne daily={data}/>
        </div>
    )
}

export default Puzzles