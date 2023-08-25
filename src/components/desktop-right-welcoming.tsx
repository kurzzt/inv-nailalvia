import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal'
import { MdMusicNote, MdMusicOff } from "react-icons/md";

interface MusicButtonProps {
    toggle: boolean;
    klik: () => void;
    audioRef: React.RefObject<HTMLAudioElement>;
}

function MusicButton({ toggle, klik, audioRef }: MusicButtonProps) {
    return (
        <>
            <audio ref={audioRef} loop autoPlay preload='true' id='myAudio'>
                <source src="/assets/The Wedding of Nailal & Via by Invitato.mp3" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
            <Button onClick={klik}
            pos={'absolute'} bottom={'12px'} left={'12px'}
            color='white'
            bgColor='rgb(155, 112, 101)'
            borderRadius='50%'
            zIndex={999}
            _hover={{
                background: 'rgb(155, 112, 101)'
            }}
            >
                {(toggle)
                    ? <MdMusicNote />
                    : <MdMusicOff />
                }
            </Button>
        </>
    )
}

export default function DesktopRightWelcoming() {
    const [music, setMusic] = useState(true)
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleMusic = () => {
        const audioElement = audioRef.current;

        if (audioElement) {
            if (music) {
                audioElement.pause();
            } else {
                audioElement.play();
            }
        }

        setMusic(!music);
    }

    return (
        <>
            <MusicButton klik={handleMusic} toggle={music} audioRef={audioRef} />
            <Box
                w='500px' h='100vh'
                boxShadow={'2xl'}
                bgColor={'rgb(180 197 212)'}
            >
                <Box
                    minH='75vh'
                    bgImg="/assets/pict.jpeg"
                    bgSize='cover'
                    bgPos='center top'
                    bgRepeat='no-repeat'
                    w='100%'
                    boxShadow={'inset 0 0 0 2000px rgb(180 197 212 / 35%)'}
                />

                <Box
                    transform={'translateY(-45px)'}
                    bgImg="/assets/icon1.svg"
                    bgSize='cover'
                    minH='3rem'
                ></Box>
                <Box
                    p={'16px 16px 0'}
                    bgColor={'secAccent.500'}
                    transform={'translateY(calc(-3rem - 4px))'}
                    color='white'
                >
                    <Fade direction='up'>
                        <Heading mb={2} textAlign={'center'} fontSize={'xl'} >Dear Mr/Mrs/Ms,</Heading>
                        <Heading mb={2} textAlign={'center'} fontSize={'xl'}>Family & Friends</Heading>
                        <Text fontSize={{ base: "xs", md: "sm" }} textAlign={'center'} fontWeight={'medium'} >
                            We are pleased to announce and invite you to our wedding. We sincerely hope that you will be able to attend and pray directly on our wedding day. Your presence will mean a lot to us.
                        </Text>
                    </Fade>
                </Box>
            </Box>
        </>
    )
}