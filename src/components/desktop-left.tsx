import { Box, Heading, Text } from '@chakra-ui/react'
import { Fade } from 'react-awesome-reveal'

export default function DesktopLeft() {
    return (
        <Box
            className='nyoba'
            h='100vh' w='calc(100% - 500px)'
            bgImage="url('/assets/bg-main.jpeg')"
            bgSize='cover'
            bgPosition='center'
            borderRightWidth='8px'
            borderRightStyle='solid'
            borderRightColor='blackAlpha.400'
            hideBelow='lg'
        >
            <Box
                p='42px'
                h='100%'
                bgColor='rgba(180, 197, 212, 0.35)'
                color={'accent.500'}
            >
                <Fade direction='up'>
                    <Text letterSpacing='2px' fontSize='md' fontWeight='light'>THE WEDDING OF</Text>
                    <Heading lineHeight={1} fontWeight={'normal'} my={8} fontSize={{base:'6xl', md:'7xl'}} letterSpacing='2px'>Nailal & Via</Heading>
                    <Text fontWeight='light' maxW='500px' letterSpacing='1px' fontStyle='italic'>
                        “And I knew exactly how old Walt Disney&apos;s Cinderella felt when she found her prince.”
                        <br />— Elizabeth Young</Text>

                </Fade>
            </Box>
        </Box>
    )
}