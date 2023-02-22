import { Box, Container, Text } from '@chakra-ui/react'
import ChessBoard from "../Chess/Chessboard/Chessboard"

const Homepage = () => {
    return (
        <div>
            <Box my={[25, 50, 75, 100]}>
                <Container textAlign="center" my={[15, 20, 25, 30]}>
                    <Text fontSize="4xl">Welcome to Chesscanada</Text>
                    <Text fontSize="l">A community to build and grow the chess community in Canada</Text>
                </Container>
                
                <Container>
                    <ChessBoard />
                </Container>
            </Box>
        </div>
    )
}

export default Homepage