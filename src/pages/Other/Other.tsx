import { Flex, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Other = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    return (
        <Flex w="100%" h="100%" justifyContent="center" align="center">
            <Text css={css`font-size: 30px;`} >counter: {count}</Text>
        </Flex>
    )
}

export default Other
