import { Chessboard } from "react-chessboard"
import { Container, Center, Text, Box } from "@chakra-ui/react"
import { useState} from "react"
import { Chess } from 'chess.js'


const Blindfold = () => {
    const [game, setGame] = useState(new Chess())

    const makeAMove = (move) => {
        const gameCopy = new Chess();
        gameCopy.loadPgn(game.pgn());
        gameCopy.move(move)
        setGame(gameCopy);
    }
    
    // Makes ther other player make a random move
    const makeRandomMove = () => {

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

    
    const pieces = ["wP", "wN", "wB", "wR", "wQ", "wK", "bP", "bN", "bB", "bR", "bQ", "bK"];
    const customPieces = () => {
        const returnPieces = {};
        pieces.map((p) => {
        returnPieces[p] = () => (
            <div/>
        );
        return null;
        });
        return returnPieces;
    }
    return (
        <div>
            <Box my={[20, 35, 50, 75]}>
                <Center>
                    <Text fontSize="4xl">Blindfold Chess</Text>
                </Center>

                <Container>
                    <Chessboard 
                    customDarkSquareStyle={{backgroundColor: "#779952"}} 
                    customLightSquareStyle={{backgroundColor: "#edeed1"}}
                    customPieces={customPieces()}
                    position={game.fen()} 
                    onPieceDrop = {onDrop}
                    />
                </Container>
            </Box>
        </div>
    )
}

export default Blindfold