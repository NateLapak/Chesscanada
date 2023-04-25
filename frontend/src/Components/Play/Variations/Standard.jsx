import { Container, Center, Text, Box } from "@chakra-ui/react"
import {Chessboard} from "react-chessboard"
import { useState} from "react"
import { Chess } from 'chess.js'

const Standard = () => {
    const [game, setGame] = useState(new Chess())

    const makeAMove = (move) => {
        const gameCopy = new Chess();
        gameCopy.loadPgn(game.pgn());
        gameCopy.move(move)
        setGame(gameCopy);
    }
    
    // Makes ther other player make a random move
    const makeRandomMove = () => {
        const possibleMoves = game.moves()

        // Exits the game if a player get's checkmated or ends in a draw
        if (game.isGameOver()) {
            return;
        }

        // Randomly assigns a index indicating the position on the chess board
        // const randomIndex = Math.floor(Math.random() * possibleMoves.length);
        const gameCopy = new Chess();
        gameCopy.loadPgn(game.pgn())
    }
    

    // Function that changes and moves the chess pieces
    const onDrop = (sourceSquare, targetSquare) => {
        const move = makeAMove({
            from: sourceSquare,
            to: targetSquare,
            promotion: "q" // Promotes pawn to queen automatically
        });

        // Makes illegal moves non-playable
        if (move === null) return false;
        
        window.setTimeout(makeRandomMove, 500);
        return true;
    }

    return (
        <div>
            <Box my={[20, 35, 50, 75]}>
                <Center>
                    <Text fontSize="4xl">Standard Chess</Text>
                </Center>

                <Container>
                    <Chessboard 
                    areArrowsAllowed
                    id="StyledBoard" 
                    customDarkSquareStyle={{backgroundColor: "#779952"}} 
                    customLightSquareStyle={{backgroundColor: "#edeed1"}}
                    position={game.fen()} 
                    onPieceDrop = {onDrop}
                    />
                </Container>
            </Box>
        </div>
    )
}

export default Standard