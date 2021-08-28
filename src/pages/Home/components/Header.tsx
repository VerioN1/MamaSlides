import { Avatar, chakra, Flex, Heading, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const NewNavLink = chakra(NavLink)
    return (
        <Flex bg="gray.500" h="10.5vh" w="100%" align="center">
            <Flex align="center" h="100%">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display="flex">
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                    </Flex>
                </Flex>
            <NewNavLink to="/" exact ml="1rem" css={css`color:blue;`} _hover={{color:'red.300'}} >Go To Main Page</NewNavLink>
        </Flex>
    )
}

export default Header
