"use client"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Paper, Box, Typography, useTheme, useMediaQuery, Menu, MenuItem, ListItemIcon } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import Auth from '@/service/auth.service';



const fontParams = {
    fontSize: { lg: '3.5rem', md: '2.3rem', sm: '1.9rem', xs: '1.4rem' },
    lineHeight: { lg: '3.5rem', md: '2.7rem', sm: '2rem', xs: '2.4rem' },
};
const fontBodyParams = {
    fontSize: { lg: '1.3rem', md: '1.2rem', sm: '1.1rem', xs: '.6rem' },
    lineHeight: { lg: '1rem', md: '1rem', sm: '.88rem', xs: '.855em' },
};
const Header = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const [openSideBar, setOpenSideBar] = useState(false)
    const handleToggleButton = () => {
        setOpenSideBar(!openSideBar)
    }
    const handleClose = () => {
        setOpenSideBar(!openSideBar)
    }

    const logoutUser = async () => {
        const auth = new Auth();
    
        try {
            const accessToken = sessionStorage.getItem("accessToken");
            const logout = await auth.logout(accessToken);
    
            sessionStorage.removeItem("accessToken");
            sessionStorage.removeItem("refreshToken");
    
            console.log(logout.data)
            window.location.reload()
        } catch (error) {
            console.error("Erro ao fazer logout do usuário:", error);
            throw error;
        }
    };
    
    return (
        <AppBar component={Paper} style={{
            width: '100%',
            display: "flex",
            alignItems: 'center',
            borderRadius: '0',
            backgroundColor: '#001928',
            padding: '.1rem 0rem',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignContent: 'center'
        }}>



            <Toolbar sx={{
                display: 'flex',
            }}>
                <Link href='/' style={{
                    textDecoration: 'none',
                    height: '70px',
                    maxWidth: '100%',
                }}>
                    <Image src="/image/logo.svg" width={70} height={70} style={{
                        flexShrink: '0',
                        objectFit: 'cover',
                        cursor: 'pointer',
                    }} alt="" />
                </Link>
            </Toolbar>
            <Typography sx={{ ...fontParams, display: isSmallScreen ? 'none' : 'inline-block' }}>
                Meus Filmes
            </Typography>
            <Box sx={{ flexGrow: 0, padding: '0 40px', }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleToggleButton} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '65px' }}
                    id="menu-appbar"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={openSideBar}
                    onClose={handleClose}
                >

                    <MenuItem onClick={handleClose}>
                        <Link href={"/settings"}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <Typography textAlign="center">Configurações</Typography>
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={logoutUser}>
                        <ListItemIcon sx={{ color: 'red' }}>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <Typography sx={{ color: 'red' }}>Sair</Typography>
                    </MenuItem>

                </Menu>

            </Box>

        </AppBar>

    )
}
export default Header