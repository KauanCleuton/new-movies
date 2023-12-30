"use client"
import React, { useState } from "react";
import { Box, styled, useTheme, TextField, Typography, Button, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';


const fontParams = {
    fontSize: { lg: '3.5rem', md: '3.2rem', sm: '3rem', xs: '3rem' },
    lineHeight: { lg: '3.5rem', md: '2.7rem', sm: '2rem', xs: '2.4rem' },
};
const fontBodyParams = {
    fontSize: { lg: '1.3rem', md: '1.2rem', sm: '1.1rem', xs: '.6rem' },
    lineHeight: { lg: '1rem', md: '1rem', sm: '.88rem', xs: '.855em' },
};

const RegisterPage = () => {
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
            background: theme.palette.background.backgroundColor,
            width: '100vw',
            padding: '0 20px',
            display: 'flex',
            placeContent: 'center',
            placeItems: 'center',
            flexDirection: 'column',
            height: '100vh'

        }} onKeyUp={handleRegister}>
            <Avatar alt="Logo Sistema" src="/image/logo.svg" sx={{
                maxWidth: '100%',
                width: '200px',
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

                padding: '30px 20px',
                justifyContent: "center",
                gap: 3
            }}>



                <Typography sx={{
                    ...fontParams,
                    textAlign: "center"
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
                        placeholder="Nome"
                        id="outlined-start-adornment"
                        label='Nome: '
                        sx={{
                            width: '100%',
                            borderRadius: '8px',
                            color: "#001928",
                            '& input': {
                                color: '#001928', // Cor do texto branco
                            },
                            '& fieldset': {
                                borderColor: '#ECECEC',
                            },
                            '&:hover fieldset': {
                                borderColor: '#001928 !important', // Cor da borda vermelha ao passar o mouse
                            },
                            '&:focus-within fieldset': {
                                borderColor: '#001928 !important', // Cor da borda vermelha quando em foco
                            },
                            '&:focus-within label': {
                                color: '#001928 !important', // Cor do rótulo vermelha quando em foco
                            },
                        }}
                        color="success"

                    />
                    <TextField
                        placeholder="Email"
                        label='Email: '
                        id="outlined-start-adornment"
                        sx={{
                            color: "#001928",
                            width: '100%',
                            borderRadius: '8px',
                            '& input': {
                                color: '#001928', // Cor do texto branco
                            },
                            '& fieldset': {
                                borderColor: '#ECECEC',
                            },
                            '&:hover fieldset': {
                                borderColor: '#001928 !important', // Cor da borda vermelha ao passar o mouse
                            },
                            '&:focus-within fieldset': {
                                borderColor: '#001928 !important', // Cor da borda vermelha quando em foco
                            },
                            '&:focus-within label': {
                                color: '#001928 !important', // Cor do rótulo vermelha quando em foco
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
                                color: '#001928', // Cor do texto branco
                            },
                            '& fieldset': {
                                borderColor: '#ECECEC',
                            },
                            '&:hover fieldset': {
                                borderColor: '#001928 !important', // Cor da borda vermelha ao passar o mouse
                            },
                            '& label': {
                                color: '#001928 !important', // Cor do rótulo vermelha
                            },
                            '&:focus-within fieldset': {
                                borderColor: '#001928 !important', // Cor da borda vermelha quando em foco
                            },
                            '&:focus-within label': {
                                color: '#001928 !important', // Cor do rótulo vermelha quando em foco
                            },
                        }}
                        color="success"
                        type="password"

                    />
                </Box>
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

export default RegisterPage;
