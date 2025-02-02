import { Fragment, useContext, useEffect, useState } from "react"
import { getUsers } from "../../../service/api"
import { Box, Divider, styled } from "@mui/material"
import SingleConvo from "./SingleConvo"
import { AccountContext } from "../../../context/AccountProvider"

export default function Conversation({ text }) {
    const { account, socket, setActiveUsers } = useContext(AccountContext)
    const [users, setUsers] = useState([])

    useEffect(() => {
        // socket.current.emit('addUsers', account)
        // socket.current.emit('addUser', account);
        socket.current.on('getUsers', (users) => {
            setActiveUsers(users)
        })
        console.log(users);
    }, [account])

    useEffect(() => {
        (async () => {
            let res = await getUsers()
            const filteredData = res.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filteredData);
        })()
    }, [text])

    const Component = styled(Box)`
        height: 81vh;
        overflow: overlay;
    `

    const StyledDivider = styled(Divider)`
        margin: 0 0 0 70px;
        background: #e9edef;
        opacity: 0.6
    `

    return (
        <Component>
            {
                users?.map(user => (
                    user.sub !== account.sub &&
                    <Fragment key={user.sub}>
                        <SingleConvo  {...user} user={user} />
                        <StyledDivider />
                    </Fragment>
                ))
            }
        </Component>
    )
}
