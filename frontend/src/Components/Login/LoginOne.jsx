import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue} from '@chakra-ui/react';

// Login page
const LoginOne = () => {

    return (
        <Flex minH={'90vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800' )}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={6} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Login to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to continue your progress
                    </Text>
                </Stack>
                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700' )} boxShadow={'lg'} p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Username</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'green.600'}>Forgot password?</Link>
                            </Stack>
                            <Button bg={'green.600'} color={'white'} _hover={{ bg: 'blue.500',}}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )

}

export default LoginOne