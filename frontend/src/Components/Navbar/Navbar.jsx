import {Box, Flex, HStack, IconButton, Menu, useDisclosure, Stack, Link } from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


const Navbar = () => {
    
    // Hook that deals with opening and closing hamburger icon
    const { isOpen, onOpen, onClose } = useDisclosure();
        
    return (

        // Create navbar using box and flex
        <Box bg="black" px={4} fontFamily="Open Sans">
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}/>

                <HStack spacing={8} alignItems={'center'} color="white" _hover={{textDecoration: 'none', bg: 'gray.600'}}>
                    <Box size={[20, 40, 60, 80]} fontSize={[18, 20, 22, 30]}>
                        <Link href="/" style={{textDecoration: 'none'}}>
                            Chesscanada.ca
                        </Link>
                    </Box>
                </HStack>
                
                <Flex alignItems={'center'}>
                    <Menu>
                        <HStack as={'nav'} px={5} spacing={9} display={{ base: 'none', md: 'flex' }} color="white">
                            <Box size={[20, 40, 60, 80]} fontSize={[12, 14, 16, 18]}_hover={{bg: 'gray.600'}}>
                                <Link href="/play" style={{textDecoration: 'none'}}>
                                    Play
                                </Link>
                            </Box>

                            <Box size={[20, 40, 60, 80]} fontSize={[12, 14, 16, 18]} _hover={{textDecoration: 'none', bg: 'gray.600'}}>
                                <Link href="/puzzles" style={{textDecoration: 'none'}}>
                                    Puzzles
                                </Link>
                            </Box>

                            <Box size={[20, 40, 60, 80]} fontSize={[12, 14, 16, 18]} _hover={{textDecoration: 'none', bg: 'gray.600'}}>
                                <Link href="/register" style={{textDecoration: 'none'}}>
                                    Register
                                </Link>
                            </Box>

                            <Box size={[20, 40, 60, 80]} fontSize={[12, 14, 16, 18]} _hover={{textDecoration: 'none', bg: 'gray.600'}}>
                                <Link href="/login" style={{textDecoration: 'none'}}>
                                    Login
                                </Link>
                            </Box>
                        </HStack>
                    </Menu>
                </Flex>
            </Flex>

            {/* Hamburger icon when screen is smaller */}
            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        <Box size={[20, 40, 60, 80]}  _hover={{textDecoration: 'none', bg: 'gray.600'}}>
                            <Link href="/play" fontSize={[18, 20, 22, 24]} color="white">
                                Play
                            </Link>
                        </Box>

                        <Box size={[20, 40, 60, 80]} fontSize={[18, 20, 22, 24]} _hover={{textDecoration: 'none', bg: 'gray.600'}} color="white">
                            <Link href="/puzzles">
                                    Puzzles
                            </Link>
                        </Box>

                        <Box size={[20, 40, 60, 80]} fontSize={[18, 20, 22, 24]} _hover={{textDecoration: 'none', bg: 'gray.600'}} color="white">
                            <Link href="/register">
                                Register
                            </Link>
                        </Box>

                        <Box size={[20, 40, 60, 80]} fontSize={[18, 20, 22, 24]} _hover={{textDecoration: 'none', bg: 'gray.600'}} color="white">
                            <Link href="/login">
                                Login
                            </Link>
                        </Box>
                        

                    </Stack>
                </Box>
            ) : null}
        </Box>

    )
}

export default Navbar