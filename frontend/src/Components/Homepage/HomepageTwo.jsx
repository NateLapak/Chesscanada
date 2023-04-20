import { Box, Container, Text, HStack, VStack, Center, Button } from '@chakra-ui/react'
import "./HomepageTwo.css"

const HomepageTwo = () => {
    return (
        <div className='layer_two'>
            <Container>
                <Text py={[5, 15, 20, 25]}fontSize="4xl" textAlign="center">About Chesscanada.ca</Text>
            </Container>
            
            <Center>
                <VStack>
                    <HStack spacing={[50, 100, 150, 200]} py={[5, 15, 20, 25]}>
                        <Box>
                            <Container>
                                <Text as="b" fontSize="2xl">Connect with players around Canada</Text>
                                <Text fontSize="l">
                                    Chesscanada is a community that promotes and provides a platform
                                    for chess players around Canada to play and communicate with each other.
                                </Text>
                            </Container>
                        </Box>
                        <Box>
                            <Container>
                                <Text as="b" fontSize="2xl">Free and Open-source</Text>
                                <Text fontSize="l">
                                    Similar to Lichess, Chesscanada is open-source and allows other developers
                                    to add, request or improve features on the website. The website's code is posted on Github 
                                    for others to view and improve.
                                </Text>
                            </Container>
                        </Box>
                    </HStack>
                    <HStack spacing={[50, 100, 150, 200]} py={[5, 15, 20, 25]}>
                        <Box>
                            <Container>
                                <Text as="b" fontSize="2xl">Uses Lichess.org API </Text>
                                <Text fontSize="l">
                                    Many features on the website is provided by the LichessAPI. When contributing to
                                    the website as a developer, use the LichessAPI as a reference when implementing or suggesting new features.
                                </Text>
                            </Container>
                        </Box>
                        <Box>
                            <Container>
                                <Text as="b" fontSize="2xl">Passion project</Text>
                                <Text fontSize="l">
                                    Created by a student from the University of Alberta, this project was created 
                                    to help grow the chess community in Canada. With the recent surge of popularity, Chess 
                                    has become more mainstream to people of all ages. I wanted to help other people discover
                                    chess as a fun game to play and build relationships.
                                </Text>
                            </Container>
                        </Box>
                    </HStack>
                    <HStack spacing={[15, 25, 40, 50]}>
                        <Box>
                            <a href="https://github.com/NateLapak/Chesscanada">
                                <Button colorScheme='green' size="lg">Github Repo</Button>
                            </a>
                        </Box>
                        <Box>
                            <a href="https://lichess.org/api">
                                <Button colorScheme='green' size="lg">LichessAPI</Button>
                            </a>
                        </Box>
                    </HStack>
                </VStack>
            </Center>
        </div>
    )
}

export default HomepageTwo