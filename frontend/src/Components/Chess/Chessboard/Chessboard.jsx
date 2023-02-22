import {Chessboard} from "react-chessboard"
import { useState, useEffect } from "react"
import { Chess } from 'chess.js'

const ChessBoard = () => {
    const chess = new Chess()
    const [game, setGame] = useState(chess)

    useEffect(()=>{
        setGame(new Chess())
      }, [])

    // Function that ensures the game does not entirely break
    const safeGameMutate = (modify) => {
        setGame((g) => {
            const update = {...g};
            modify(update)
            return update;
        })
    }

    // Makes ther other player make a random move
    const makeRandomMove = () => {
        const possibleMoves = game.moves()

        // Exits the game if a player get's checkmated or ends in a draw
        if (game.game_over() || game.in_draw() || possibleMoves.length === 0) {
            return;
        }

        // Randomly assigns a index indicating the position on the chess board
        const randomIndex = Math.floor(Math.random() * possibleMoves.length);
        safeGameMutate((game) => {
            game.move(possibleMoves[randomIndex]);
        })

    }

    // Function that changes and moves the chess pieces
    const onDrop = (sourceSquare, targetSquare) => {

        
        const gameCopy = {...game} 
        console.log(game)
        console.log(gameCopy)

        const move = gameCopy.move({
            from: sourceSquare,
            to: targetSquare,
            promotion: "q" // Promotes pawn to queen automatically
        })
        setGame(gameCopy)

        // Makes illegal moves non-playable
        if (move === null) return false;

        return true;
    }

    return (
        <div>            
            <Chessboard 
                id="StyledBoard" 
                customDarkSquareStyle={{backgroundColor: "#779952"}} 
                customLightSquareStyle={{backgroundColor: "#edeed1"}}
                position={game.fen()}
                onPieceDrop = {onDrop}
            />
        </div>
    )
}

export default ChessBoard