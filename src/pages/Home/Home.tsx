import {
    Flex, Text
} from '@chakra-ui/react'
import { css, jsx } from '@emotion/react'
import Context from './components/Context'
import Header from './components/Header'
import SideBar from './components/SideBar'

const Home = () => {
   return(
       <Flex direction="column" w="100%">
       <Header/>
       <Flex w="100%" h="100%">
           <Context/>
           <SideBar/>
       </Flex>
       </Flex>
   )
}

export default Home
