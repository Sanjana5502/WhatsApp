import { Box, Typography, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation, setConversation } from "../../../service/api";
import { getDate } from "../../../utils/CommonUtils";

export default function SingleConvo(props) {

    const { setPerson, account, newMessageFlag } = useContext(AccountContext);
    const [message, setMessage] = useState({})

    const Component = styled(Box)`
        display: flex;
        height: 45px;
        padding: 13px 0;
        cursor: pointer;
    `

    const Image = styled('img')`
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 0 14px;
    `

    const Container = styled(Box)`
        display: flex;
    `

    const TimeStamp = styled(Typography)`
        font-size: 12px;
        margin-left: auto;
        color: #00000099;
        margin-right: 20px;
    `

    const Text = styled(Typography)`
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
    `

    useEffect(() => {
        console.log('getconvo');
        (async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: props.user.sub })
            setMessage({ text: data?.message, timestamp: data?.updatedAt })
        })()
    }, [newMessageFlag])

    const getUser = async () => {
        setPerson(props.user);
        let user = props.user
        await setConversation({ senderId: account.sub, receiverId: user.sub })
    }


    return (
        <Component onClick={getUser} >
            <Box>
                <Image src={props.picture} alt="" />
            </Box>
            <Box style={{width: '100%'}}>
                <Container>
                    <Typography>{props.name}</Typography>
                    {
                        message?.text &&
                        <TimeStamp>{getDate(message?.timestamp)}</TimeStamp>
                    }
                </Container>
                <Box>
                    <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
                </Box>
            </Box>
        </Component>
    )
}
