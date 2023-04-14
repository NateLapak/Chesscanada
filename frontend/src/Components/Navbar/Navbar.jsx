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
                <HStack spacing={8} alignItems={'center'} color="white">
                    <Box size={[20, 40, 60, 80]}>

                        <Link href="/">
                            Chesscanada
                        </Link>
                    </Box>
                </HStack>
                
                <Flex alignItems={'center'}>
                    <Menu>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} color="white">
                            <Box size={[20, 40, 60, 80]}>
                                <Link href="/register">
                                    Register
                                </Link>
                            </Box>

                            <Box size={[20, 40, 60, 80]}>
                                <Link href="/login">
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
           
                            Login

                    </Stack>
                </Box>
            ) : null}
        </Box>

    )
}

export default Navbar