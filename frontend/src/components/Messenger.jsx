import { AppBar, Toolbar, styled, Box } from '@mui/material'
import LoginDialogue from './account/LoginDialogue'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
import ChatDialog from './chat/ChatDialog'

export default function Messenger() {
    const { account } = useContext(AccountContext)

    const Component = styled(Box)`
        height: 100vh;
        background:DCDCDC
    `

    const LoginHeader = styled(AppBar)`
        height: 220px;
        background-color: #00bfa5;
        box-shadow: none
    `

    const Header = styled(AppBar)`
        height: 125px;
        background-color: #00A884;
        box-shadow: none
    `

    return (
        <Component>
            {
                account ?
                    <>
                        <Header>
                            <Toolbar>

                            </Toolbar>
                        </Header>
                        <ChatDialog />
                    </>
                    :
                    <>
                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                        </LoginHeader>
                        <LoginDialogue />
                    </>
            }
        </Component>
    )
}
