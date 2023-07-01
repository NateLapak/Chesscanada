import Blindfold from "./Blindfold"
import Standard from "./Standard"
import { Button, Box, Center, Text } from "@chakra-ui/react"

const PlayOne = () => {
    return (
        <Box my={[20, 35, 50, 75]}>

            <Text fontSize="4xl" align="center">Choose a variation and start playing now</Text>
        
            {/* Standard game of chess */}
            <div>
                <Standard />

                <Center>
                    <Box>
                        <a href="play/standard">
                            <Button colorScheme='green' size="lg">Play standard</Button>
                        </a>
                    </Box>
                </Center>
            </div>

            
            {/* Blindfolded game of chess */}
            <div>
                <Blindfold />
                <Center>
                    <Box>
                        <a href="play/blindfold">
                            <Button colorScheme='green' size="lg">Play Blindfold</Button>
                        </a>
                    </Box>
                </Center>
            </div>
        </Box>
    )
}

export default PlayOne
