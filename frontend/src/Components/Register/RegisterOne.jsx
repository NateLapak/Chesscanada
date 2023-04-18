import { Flex, Box, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack, Button, Heading, Text, useColorModeValue, Link} from '@chakra-ui/react';
import { useState} from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {Link as RouteLink} from "react-router-dom"


const RegisterOne = () => {

    const register_user = async () => {
        const res = await fetch("", {
            method: "POST",
            body: JSON.stringfy({
                username: "",
                email: "",
                password: "",
            }),

            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    // React hook to keep state of whether password field is shown or hidden
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Flex minH={'90vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800' )}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Create an account
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                    Join the Canadian Chess community today
                    </Text>
                </Stack>
                    <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700' )} boxShadow={'lg'} p={8}>
                       <Stack spacing={6} px={[40, 45, 50, 55]}>
                        <FormControl id="firstName" isRequired>
                             <FormLabel>Username</FormLabel>
                            <Input type="text" />
                           </FormControl>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                               <InputGroup>
                                   <Input type={showPassword ? 'text' : 'password' } />
                                <InputRightElement h={'full'}>
                                    <Button variant={'ghost'} onClick={()=>
                                        setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ?
                                        <ViewIcon /> :
                                           <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                             </InputGroup>
                           </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button loadingText="Submitting" size="lg" bg={'green.600'} color={'white'}
                                _hover={{bg: 'green.600', }}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user?
                                <Link as={RouteLink} to="/login" color={'green.600'}> Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
        )
    }

export default RegisterOne