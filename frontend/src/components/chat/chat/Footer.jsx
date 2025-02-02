import { AttachFile, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";
import { useEffect } from "react";
import { uploadFile } from "../../../service/api";

export default function Footer({ sendText, setText, text, file, setFile, setImage }) {

    const Container = styled(Box)`
        height: 55px;
        background: #ededed; 
        display: flex;
        width: 100%;
        align-items: center;
        padding: 0 15px;
        & > * {
            margin: 5px;
            color: #919191;
        }
    `

    const Search = styled(Box)`
        background-color: #ffffff;
        border-radius: 18px;
        width: calc(94% - 100px)
    `

    const InputField = styled(InputBase)`
        width: 100%;
        padding: 20px;
        height: 20px;
        padding-left: 25px;
        font-size: 14px;
    `

    const ClipIcon = styled(AttachFile)`
        transform: rotate(40deg)
    `

    useEffect(() => {
        (async () => {
            if (file) {
                const data = new FormData()
                data.append('name', file.name)
                data.append('file', file)
                let res = await uploadFile(data)
                setImage(res.data)
                setFile('')
                // upload = false
            }
        })()
    }, [file])

    const onFileChange = (e) => {
        setFile(e.target.files[0])
        setText('selected file: ' + e.target.files[0].name)
        // upload = true
    }

    return (
        <Container>
            <EmojiEmotionsOutlined />
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input
                type="file"
                style={{ display: 'none' }}
                id="fileInput"
                onChange={onFileChange}
            />
            <Search>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    onKeyDown={(e) => sendText(e)}
                />
            </Search>
            <Mic />
        </Container>
    )
}
