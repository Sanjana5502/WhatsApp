import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

export default function Profile() {

    const {account} = useContext(AccountContext)

    const ImageContainer = styled(Box)`
        display: flex;
        justify-content: center;
    `

    const Image = styled('img')`
        width: 200px;
        height: 200px;
        border-radius: 50%;
        padding: 25px 0;
    `

    const BoxWrapper = styled(Box)`
        background: #FFFFFF;
        padding: 12px 30px 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        & :first-of-type {
            font-size: 13px;
            color: #009688;
            font-weight: 200;
        }
        & :last-of-type {
            margin: 14px 0;
            color: #4A4A4A;
        }
    `

    const DescriptionContainer = styled(Box)`
        padding: 15px 20px 28px 30px;
        & > p {
            font-size: 13px;
            color: #8696a0
        }
    `
    
    return (
        <>
            <ImageContainer>
                <Image src={account.picture} alt="" />
            </ImageContainer>
            <BoxWrapper>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </BoxWrapper>
            <DescriptionContainer>
                <Typography>This is not your username or pin. This will be visible to your whatsapp contacts.</Typography>
            </DescriptionContainer>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Eat, Sleep, Code, Repeat!</Typography>
            </BoxWrapper>
        </>
    )
}
