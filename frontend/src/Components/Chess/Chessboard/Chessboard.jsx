import {Chessboard} from "react-chessboard"
import { useState} from "react"
import { Chess } from 'chess.js'

const ChessBoard = () => {
    const [game, setGame] = useState(new Chess())

    const makeAMove = (move) => {
        const gameCopy = new Chess();
        gameCopy.loadPgn(game.pgn());
        gameCopy.move(move)
        setGame(gameCopy);
    }
    

    // Makes ther other player make a random move
    const makeRandomMove = () => {
        // const possibleMoves = game.moves()

        // Exits the game if a player get's checkmated or ends in a draw
        if (game.isGameOver()) {
            return;
        }

        // Randomly assigns a index indicating the position on the chess board
        // const randomIndex = Math.floor(Math.random() * possibleMoves.length);
        const gameCopy = new Chess();
        gameCopy.loadPgn(game.pgn())

        // if (game.history().length !== 0 && game ) {
        //     gameCopy.move(possibleMoves[randomIndex])
        //     setGame(gameCopy)
        // }
        
    }
    

    // Function that changes and moves the chess pieces
    const onDrop = (sourceSquare, targetSquare) => {
        let move = {}
        
        try {
            move = makeAMove({
                from: sourceSquare,
                to: targetSquare,
                promotion: "q" // Promotes pawn to queen automatically
            });
        }

        catch {
            return null;
        }

        window.setTimeout(makeRandomMove, 500);
        return true;
    }


    return (
        <div>            
            <Chessboard 
            dropOffBoardAction="trash"
            customDarkSquareStyle={{backgroundColor: "#779952"}} 
            customLightSquareStyle={{backgroundColor: "#edeed1"}}
            position={game.fen()} 
            onPieceDrop = {onDrop}
            />
        </div>
    )
}

export default ChessBoard