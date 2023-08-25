import { Box, Flex, Image, Heading, Text} from '@chakra-ui/react'
import { TbMailOpenedFilled } from "react-icons/tb";
import { Fade, Zoom } from 'react-awesome-reveal'

export default function DesktopRightCover({ invToggle }: { invToggle: () => void }){
    return (
        <Box
            w='500px' h='100vh'
            boxShadow={'2xl'}
        >
            <Box
                minH='90vh'
                bgImg="/assets/bg-main.jpeg"
                bgSize='cover'
                bgPos='center'
                bgRepeat='no-repeat'
                w='100%'
                boxShadow={'inset 0 0 0 2000px rgb(180 197 212 / 35%)'}
            >
                <Box>
                    <Box>
                        <Fade direction='up'>

                            <Flex pt='15%' justify='center' mb='16px' align='center'>
                                <Image alt="burung" src='/assets/icon2.svg' />
                            </Flex>
                            <Flex justify='center' align='center'>
                                <Text mb='4px' color='white' fontWeight='300' fontSize='14px' lineHeight={{ base: "none", md: "1.2" }} textTransform='uppercase'>The Wedding of</Text>
                            </Flex>
                            <Flex justify='center' align='center'>
                                <Heading color='white' >Nailal and Via</Heading>
                            </Flex>
                        </Fade>
                    </Box >
                    <Flex
                        justify='center' align='center' >
                        <Flex
                            as={'button'} justify='center' align='center'
                            color='white'
                            bgColor='rgb(180 197 212 / 68%)'
                            px={2}
                            minW={8}
                            verticalAlign={'middle'}
                            lineHeight={1.2}
                            h={8}
                            borderRadius={'16px'}
                            fontWeight='medium'
                            fontSize='sm'
                            gap={'3px'}
                            bottom={'140px'}
                            pos={'absolute'}
                            _hover={{
                                background: 'rgba(0, 0, 0, 0.36)',
                            }}
                            onClick={ invToggle }
                        >
                            <Zoom>
                                <TbMailOpenedFilled />
                                <span>Open Invitation</span>
                            </Zoom>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
            <Box
                h={'0px'}
            >
                <Box
                    transform={'translateY(-38px)'}
                    bgImg="/assets/icon1.svg"
                    bgSize='cover'
                    minH='3rem'
                ></Box>
                <Box
                    p={'1rem'}
                    bgColor={'secAccent.500'}
                    transform={'translateY(-40px)'}
                    fontWeight={'medium'}
                >
                    <Flex align='center' justify='center'>
                        <Text color='white'>Created with &#10084; by Kurzt</Text>
                    </Flex>
                    <Flex align='center' justify='center'>
                        <Text color={'white'} fontSize={'sm'}>© 2023 Nailal & Via. All Rights Reserved</Text>
                    </Flex>
                    <Flex align='center' justify='center' m={1.5}></Flex>
                </Box>
            </Box>
        </Box>
    )
}