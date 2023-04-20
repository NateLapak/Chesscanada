import { Box, Container, Text, Button, HStack, Center } from '@chakra-ui/react'
import ChessBoard from "../Chess/Chessboard/Chessboard"

const Homepage = () => {
    return (
        <div>
            <Box my={[20, 35, 50, 75]}>
                <Container textAlign="center" my={[15, 20, 25, 30]}>
                    <Text fontSize="4xl">Welcome to Chesscanada</Text>
                    <Text fontSize="l">A community to build and grow the chess community in Canada</Text>
                </Container>
                
                <Container>
                    <ChessBoard />
                </Container>

                <Center py={[10, 20, 25, 35]}>
                    <HStack spacing={[15, 25, 40, 50]}>
                        <Box>
                            <a href="/play">
                                <Button colorScheme='green' size="lg">Play</Button>
                            </a>
                        </Box>
                        <Box>
                            <a href="/puzzles">
                                <Button colorScheme='green' size="lg">Puzzles</Button>
                            </a>
                        </Box>
                    </HStack>
                </Center>

            </Box>
        </div>
    )
}

export default Homepage