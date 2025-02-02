import { MoreVert, Search } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

export default function ChatHeader(props) {

    const { activeUsers } = useContext(AccountContext)
    console.log(activeUsers);

    const Header = styled(Box)`
        height: 44px;
        background: #ededed;
        padding: 8px 16px;
        display: flex;
        align-items: center;
    `

    const Image = styled('img')`
        height: 40px;
        width:40px;
        object-fit: cover;
        border-radius: 50%;
    `

    const Text = styled(Typography)`
        margin-left: 12px !important
    `

    const Status = styled(Typography)`
        margin-left: 12px !important;
        font-size: 12px;
        color: rgb(0, 0, 0, 0.6)
    `

    const RightContainer = styled(Box)`
        margin-left: auto;
        & > svg {
            padding: 8px;
            font-size: 24px;
            color: #000;
        }
    `

    return (
        <Header>
            <Image src={props.picture} alt="dp" />
            <Box>
                <Text>{props.name}</Text>
                <Status>{activeUsers?.find(user => user.sub === props.sub) ? 'Online' : 'Offline'}</Status>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Header>
    )
}
