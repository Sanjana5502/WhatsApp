import { Box, Typography, styled } from '@mui/material'
import { getDate, downloadMedia } from '../../../utils/CommonUtils'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import GetAppIcon from '@mui/icons-material/GetApp'
import { iconPDF } from '../../../constants/data'


const Time = styled(Typography)`
        font-size: 10px;
        color: #919191;
        margin-top: auto;
        word-break: keep-all;
    `

export default function Message({ message }) {

    const { account } = useContext(AccountContext)

    const Own = styled(Box)`
        background: #dcf8c6;
        max-width: 60%;
        margin-left: auto;
        padding: 5px;
        width: fit-content;
        display: flex;
        border-radius: 10px;
        word-break: break-word;
    `

    const Wrapper = styled(Box)`
        background: #FFFFFF;
        max-width: 60%;
        padding: 5px;
        width: fit-content;
        display: flex;
        border-radius: 10px;
        word-break: break-word;
    `

    const Text = styled(Typography)`
        font-size: 14px;
        padding: 0 25px 0 5px;
    `


    return (
        <>
            {
                account.sub === message.senderId ?
                    <Own>
                        {
                            message.type === 'file' ?
                                <ImageMessage message={message} />
                                :
                                <>
                                    <Text>
                                        {message.text}
                                    </Text>
                                    <Time>
                                        {getDate(message.createdAt)}
                                    </Time>
                                </>
                        }

                    </Own>
                    :
                    <Wrapper>
                        {
                            message.type === 'file' ?
                                <ImageMessage message={message} />
                                :
                                <>
                                    <Text>
                                        {message.text}
                                    </Text>
                                    <Time>
                                        {getDate(message.createdAt)}
                                    </Time>
                                </>
                        }
                    </Wrapper>
            }
        </>
    )
}


const ImageMessage = ({ message }) => {
    return (
        <Box style={{ position: 'relative' }}>
            {
                message?.text?.includes('.pdf') ?
                    <Box style={{ display: 'flex' }}>
                        <img src={iconPDF} alt="pdf" style={{ width: 80 }} />
                        <Typography style={{ fontSize: 14 }}>{message.text}</Typography>
                    </Box>
                    :
                    <img src={message.text} alt={message.text.split('/').pop()} style={{ width: '300px' }} />
            }
            <Time style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <GetAppIcon
                    style={{ marginRight: 10, border: '1px solid grey', borderRadius: '50%' }}
                    fontSize='small'
                    onClick={(e) => downloadMedia(e, message.text)}
                />
                {getDate(message.createdAt)}
            </Time>
        </Box>
    )
}
