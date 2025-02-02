import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";

export default function HeaderMenu({ setOpenDrawer }) {

    const MenuOption = styled(MenuItem)`
        font-size: 14px;
        padding: 15px 60px 5px 24px;
        color: #4A4A4A;
    `

    const [open, setOpen] = useState(null)

    const handleClose = () => {
        setOpen(null)
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }

    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                id="basic-menu"
                keepMounted
                anchorEl={open}
                open={open}
                onClose={handleClose}
                getcontentanchore1={null}
                // getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuOption onClick={() => { handleClose(); setOpenDrawer(true); }}>Profile</MenuOption>
            </Menu>
        </>
    )
}
