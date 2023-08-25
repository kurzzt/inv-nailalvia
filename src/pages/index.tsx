import DesktopLeft from '@/components/desktop-left'
import DesktopRight from '@/components/desktop-right'
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Wedding of Nailal & Via by Kurzt</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex
        align="center" justify="center"
        pos='relative'
        w='100%'
        height='100vh'
      >
        <DesktopLeft></DesktopLeft>
        <DesktopRight></DesktopRight>
      </Flex>
    </>
  )
}
