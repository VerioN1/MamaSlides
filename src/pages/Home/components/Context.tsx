import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { decrement } from '../../../store/features/CounterSlice'

const Context = () => {
    const count = useSelector((state :RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <Flex css={css`flex: 1 1 70%`} mixW="400px" bg="orange">
            <Text>Counter state = {count}</Text>
            <Button variant="outline" bg="red.400" onClick={() => dispatch(decrement())}>Add 1</Button>
           </Flex>
    )
}

export default Context
