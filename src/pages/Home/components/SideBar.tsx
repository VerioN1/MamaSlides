import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import { useState } from 'react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import '../style/index.css'
import { IoPawOutline } from 'react-icons/io5'
import SlidePreview from './SlidePreview'
import { css } from '@emotion/react'

const SideBar = () => {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            bg="gray.50"
            h="100%"
            maxW="250px"
            minW="100px"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            w={"30%"}
            flexDir="column"
            justifyContent="space-between"
            overflowY="scroll"
            css={css`direction:rtl;`}
        >
            <Flex
            pt="0.1rem"
                flexDir="column"
                w="100%"
                alignItems={"flex-start"}
                as="nav"
            >
                <SlidePreview/>
                <SlidePreview/>
                <SlidePreview/>
                <SlidePreview/>
                <SlidePreview/>
                {/* <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="This is the description for the dashboard." />
                <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" active />
                <NavItem navSize={navSize} icon={FiUser} title="Clients" />
                <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
                <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
                <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
                <NavItem navSize={navSize} icon={FiSettings} title="Settings" /> */}
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize === "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex> <Flex mt={4} align="center" h="100vh">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SideBar
