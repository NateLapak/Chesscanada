import ChessBoard from "../Chess/Chessboard/Chessboard"
import {Box, Container, Center, Text} from "@chakra-ui/react"

const PuzzleOne = ({daily}) => {

    const dailyData = daily

    return (
        <div>

            <Center>
                <h2>Puzzle from Lichess API</h2>
            </Center>

            <Box my={[20, 35, 40, 50]}> 


                <Text align="center" fontSize="4xl">Daily Puzzle</Text>

                <Container>
                    <ChessBoard />
                </Container>

            </Box>
        </div>
    )
}

export default PuzzleOne