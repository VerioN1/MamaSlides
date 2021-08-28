import { Flex, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React from 'react'

const SlidePreview = () => {
    return (
        <Flex pl="0.3rem" justify="flex-start" flexDir="row" bg="#fdf7e6" borderRadius="8px" color="gray.500"paddingTop="0.3rem" paddingBottom="0.3rem">
            <Text mx="0.5rem" color="gray.600" fontSize="14px">1</Text>
        <Flex css={css`direction:rtl;`} borderRadius="6px" minW="152px" minH="88px" bg="white" border="2px" borderColor="gray.300" _hover={{border: "2px", borderColor:"yellow.400"}}>
            שקופית
        </Flex>
        </Flex>
    )
}

export default SlidePreview
