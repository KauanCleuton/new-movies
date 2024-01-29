"use client"
import React, { useState } from "react";
import { Box, styled, useTheme, TextField, Typography, Button, Avatar } from '@mui/material';
import { Link } from 'next/link'



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
    const [values, setValues] = useState({
        nome: '',
        email: '',
        senha: ''
    });
    const theme = useTheme();

    const handleChange = (fieldName, value) => {
        if (!value) return false;
        setValues((prevValues) => ({ ...prevValues, [fieldName]: value }));
    };

    const handleRegister = () => {
        console.table(values);
    };

    return (
        <Box sx={{
            backgroundImage: "linear-gradient(50deg, #001928, transparent),url('/image/bg-login.jpeg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            py: 15,
            flexDirection: 'column',
            height: '100vh',
            objectFit: 'cover',
        }} onKeyUp={handleRegister}>
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

                    />
                    <TextField
                        placeholder="Senha: "
                        id="outlined-start-adornment"
                        label='Senha: '
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

                    />
                </Box>
                <Typography sx={{ display: 'flex', gap: 1, fontSize: {sm: '1.1rem', xs: '.6rem'}}} >
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
                }} onClick={handleRegister} >
                    Entrar
                </Button>

            </Box>
            
        </Box >
    );
};

export default LoginPage;
