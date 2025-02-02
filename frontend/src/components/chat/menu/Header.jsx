import { useContext, useState } from "react"
import { AccountContext } from "../../../context/AccountProvider"
import { Box, styled } from "@mui/material"
import { Chat as MessageIcon } from '@mui/icons-material'
import HeaderMenu from "./HeaderMenu"
import InfoDrawer from "../../drawer/InfoDrawer"


export default function Header() {
    const { account } = useContext(AccountContext)
    const [openDrawer, setOpenDrawer] = useState(false)

    const toggleDrawer = () => {
        setOpenDrawer(true)
    }

    const Component = styled(Box)`
        height: 44px;
        background-color: #ededed;
        padding: 8px 16px;
        display: flex;
        align-items: center;
    `

    const Wrapper = styled(Box)`
        margin-left: auto;
        & > * {
            padding: 8px;
            color: #000;
        };
        & : first-of-type {
            font-size: 22px;
            margin-right: 8px;
        }
    `

    const Image = styled('img')({
        height: '43px',
        width: '43px',
        borderRadius: '50%'
    })

    return (
        <Component>
            <Image src={account.picture} alt="dp" onClick={toggleDrawer} />
            <Wrapper>
                <MessageIcon />
                <HeaderMenu setOpenDrawer={setOpenDrawer} />
            </Wrapper>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </Component>
    )
}
