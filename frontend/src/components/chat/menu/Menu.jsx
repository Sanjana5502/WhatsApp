import { Box } from '@mui/material'
import Header from './Header'
import Search from './Search'
import Conversation from './Conversation'
import { useState } from 'react'

export default function Menu() {

    const [text, setText] = useState('')
    
    return (
        <Box>
            <Header />
            <Search setText={setText} text={text}/>
            <Conversation text={text}/>
        </Box>
    )
}
