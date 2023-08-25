// theme.ts
import { extendTheme } from '@chakra-ui/react';
import { Clicker_Script, Dancing_Script, Jost } from 'next/font/google';

const heading = Clicker_Script({
    weight: ['400'],
    subsets: ['latin']
})

const body = Jost({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})

const theme = extendTheme({
    breakpoints: {
        base: "0px",
        sm: "320px",
        md: "768px",
        lg: "1028px",
        xl: "1200px",
        "2xl": "1536px",
    },
    colors: {
        accent: {
            500: '#67544e',
        },
        secAccent: {
            500: '#b4c5d5',
        }
    },
    fonts: {
        heading: heading.style.fontFamily,
        body: body.style.fontFamily,
    },
});


export default theme;
