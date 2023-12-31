"use client"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Paper, Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import Link from 'next/link';
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
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const [openSideBar, setOpenSideBar] = useState(false)
    const handleToggleButton = () => {
        setOpenSideBar(!openSideBar)
    }

    return (
        <Box>
            <AppBar component={Paper} style={{
                width: '100%',
                display: "flex",
                alignItems: 'center',
                backgroundColor: '#001928',
                padding: '.1rem 1.5rem',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                
            }}>



                <Toolbar sx={{
                    display: 'flex',
                }}>
                    <Link href='/home' style={{ textDecoration: 'none' }}>
                        <img src="/image/logo.svg" style={{
                            width: '80px',
                            maxWidth: '100%',
                            flexShrink: '0',
                            objectFit: 'cover',
                            cursor: 'pointer',

                        }} alt="" />
                    </Link>
                </Toolbar>
                <Typography sx={{...fontParams, display: isSmallScreen ? 'none' : 'inline-block'}}>
                    Meus Filmes
                </Typography>
                <Box sx={{ flexGrow: 0, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 1 }}>
                    <Tooltip title="Open settings">
                        <IconButton sx={{ p: 0, margin: '0 auto' }}>
                            <Avatar alt="Remy Sharp" src="https://github.com/KauanCleuton.png" />
                        </IconButton>
                    </Tooltip>
                    {/* <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        
                    </Menu> */}
                    <Typography sx={{
                        ...fontBodyParams,
                        margin: '0 auto'
                    }}>
                        Kauan Cleuton
                    </Typography>
                </Box>

            </AppBar>
        </Box>
    )
}
export default Header