import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { qrCodeImage } from '../../constants/data'
import { addUser } from '../../service/api'

export default function LoginDialogue() {

    const { setAccount, account, socket } = useContext(AccountContext)

    const onLoginError = (res) => {
        console.log('error', res);
    }

    const onLoginSuccess = async (res) => {
        const decode = await jwt_decode(res?.credential);
        // console.log(decode);
        console.log(decode);
        setAccount(decode);
        await addUser(decode); 
        socket.current.emit('addUser', decode);
    }

    const dialogStyle = {
        height: '92%',
        marginTop: '12%',
        width: '60%',
        maxWidth: '100%',
        maxHeight: '100%',
        boxShadow: 'none',
        overflow: 'hidden'
    }

    const Component = styled(Box)`
        display: flex;
    `

    const Container = styled(Box)`
        padding: 56px 0 56px 56px;
    `

    const QRCode = styled('img')({
        height: '264px',
        width: '264px',
        margin: '50px 0 0 50px'
    })

    const Title = styled(Typography)`
        font-size: 26px;
        color: #525252;
        font-weight: 300;
        // font-family: inherit;
        margin-bottom: 25px
    `

    const StyledList = styled(List)`
        & > li {
            padding: 0;
            margin-top: 15px;
            font-size: 18px;
            line-height: 28px;
            color: #4a4a4a
        }
    `

    return (
        <>
            <Dialog
                PaperProps={{ sx: dialogStyle }}
                open={true}
                hideBackdrop={true}
            >
                <Component>
                    <Container>
                        <Title>To use whatsapp on your computer:</Title>
                        <StyledList>
                            <ListItem>1. Open whatsapp on your phone</ListItem>
                            <ListItem>2. Tap menu settings and select Whatsapp Web</ListItem>
                            <ListItem>3. Point your phone to this screen to capture code</ListItem>
                        </StyledList>
                    </Container>
                    <Box style={{ position: 'relative' }}>
                        <QRCode src={qrCodeImage} alt="" />
                        <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(25%)' }}>
                            <GoogleLogin
                                onSuccess={onLoginSuccess}
                                onError={onLoginError}
                            />
                        </Box>
                    </Box>
                </Component>
            </Dialog>
        </>
    )
}
