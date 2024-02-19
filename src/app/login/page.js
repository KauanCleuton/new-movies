"use client"
import React, { useState } from "react";
import { Box, styled, useTheme, TextField, Typography, Button, Avatar, Snackbar, IconButton } from '@mui/material';
import { Link } from 'next/link'
import { useRouter } from "next/navigation";
import Auth from "@/service/auth.service";
import { Close } from '@mui/icons-material'



const fontParams = {
    fontSize: { lg: '3.5rem', md: '3.2rem', sm: '3rem', xs: '3rem' },
    lineHeight: { lg: '3.5rem', md: '2.7rem', sm: '2rem', xs: '2.4rem' },
};
const fontBodyParams = {
    fontSize: { lg: '1.3rem', md: '1.2rem', sm: '1.1rem', xs: '.9rem' },
    lineHeight: { lg: '1rem', md: '1rem', sm: '.88rem', xs: '.855em' },
};

const LinkRegister = styled('a')({
    textDecoration: "none",
    color: '#001928',
    fontWeight: 'bold'
})

const LoginPage = () => {
    const auth = new Auth();
    const router = useRouter();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleOnChangeValue = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };
    const [text, setText] = useState({
        message: '',
        variant: ''
    })
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const handleCloseSnackBar = () => setOpenSnackBar(!openSnackBar)
    const handleLogin = async () => {
        try {
            const response = await auth.login(data);

            console.log(response.data);
            const { accessToken, refreshToken } = response.data.response;
            console.log(accessToken, refreshToken, 7777777)
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            setOpenSnackBar(!openSnackBar)
            setText({ ...text, 'message': response.data.response.message, 'variant': "success" })
            router.push("/");
        } catch (error) {
            console.log('Error logging in', error);
            setOpenSnackBar(!openSnackBar)
            setText({ ...text, 'message': 'Credenciais Inválidas!', 'variant': "error" })
            router.push("/login");
        }
    };

    const SnackBarAuth = ({ text, open, close }) => {
        return <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={open}
            onClose={close}
            message={text.message}
            variant={text.variant}
            action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={close}>
                    <Close fontSize="small" />
                </IconButton>
            }
        />
    }


    return (
        <Box sx={{
            backgroundImage: "linear-gradient(50deg, #001928, transparent),url('/image/bg-login.jpeg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            py: 15,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: 'column',
            height: '100vh',
            objectFit: 'cover',
            px: 3
        }}
            onKeyUp={handleOnChangeValue}
        >
            <Avatar alt="Logo Sistema" src="/image/logo.svg" sx={{
                maxWidth: '100%',
                width: '130px',
                height: 'auto',
                borderRadius: '0',
                objectFit: 'cover'
            }} />
            <Box sx={{
                maxWidth: '400px',
                height: 'auto',
                width: '100%',
                background: "#fff",
                borderRadius: ".25rem",
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                wordWrap: 'break-word',
                backgroundClip: 'border-box',

                padding: '20px',
                justifyContent: "center",
                gap: 1
            }}>



                <Typography sx={{
                    ...fontParams,
                    textAlign: "center",
                    mb: 2
                }}>
                    Login
                </Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: "20px"
                }}>
                    <TextField
                        placeholder="Email"
                        label='Email: '
                        name="email"
                        id="outlined-start-adornment"
                        sx={{
                            color: "#001928",
                            width: '100%',
                            borderRadius: '8px',
                            '& input': {
                                color: '#001928',
                            },
                            '& fieldset': {
                                borderColor: '#ECECEC',
                            },
                            '&:hover fieldset': {
                                borderColor: '#001928 !important',

                            },
                            '&:focus-within fieldset': {
                                borderColor: '#001928 !important',
                            },
                            '&:focus-within label': {
                                color: '#001928 !important',
                            },
                        }}
                        color="success"
                        type="email"
                        onChange={handleOnChangeValue}
                        value={data.email}
                    />
                    <TextField
                        placeholder="Senha: "
                        id="outlined-start-adornment"
                        label='Senha: '
                        name="password"
                        sx={{
                            color: "#001928",
                            width: '100%',
                            borderRadius: '8px',
                            '& input': {
                                color: '#001928',
                            },
                            '& fieldset': {
                                borderColor: '#ECECEC',
                            },
                            '&:hover fieldset': {
                                borderColor: '#001928 !important',

                            },
                            '& label': {
                                color: '#001928 !important',
                            },
                            '&:focus-within fieldset': {
                                borderColor: '#001928 !important',
                            },
                            '&:focus-within label': {
                                color: '#001928 !important',
                            },
                        }}
                        color="success"
                        type="password"
                        onChange={handleOnChangeValue}
                        value={data.password}

                    />
                </Box>
                <Typography sx={{ display: 'flex', gap: 1, fontSize: { sm: '1.1rem', xs: '.6rem' } }} >
                    Ainda não tem conta? <LinkRegister href="/register" >Criar Conta</LinkRegister>
                </Typography>
                <Button sx={{
                    width: '100%',
                    display: 'flex',
                    alignSelf: "center",
                    padding: '15px 20px',
                    background: "#001928",
                    ...fontBodyParams,
                    color: '#fff',
                    ":hover": {
                        background: '#001921'
                    }
                }} onClick={handleLogin}>
                    Entrar
                </Button>

            </Box>
            <SnackBarAuth close={handleCloseSnackBar} text={text} open={openSnackBar} />
        </Box >
    );
};

export default LoginPage;
