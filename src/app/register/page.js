"use client"
import React, { useState } from "react";
import { Box, styled, useTheme, TextField, Typography, Stack, Button } from '@mui/material';

const StyledImg = styled("img")({
    maxWidth: '100%',
    width: '200px',
    height: '200px',
});

const fontParams = {
    fontSize: { lg: '3rem', md: '2.6rem', sm: '2.2rem', xs: '.9rem' },
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
            width: "100vw",
            background: theme.palette.background.backgroundColor,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px 20px',
            placeContent: 'center'
        }}>
            <StyledImg src={"/assets/logo.svg"} alt="Logo" />

            <Box sx={{
                backgroundColor: "#fff",
                width: '100%',
                maxWidth: '400px',
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: "1.2rem",
            }}>
                <Typography sx={{ ...fontParams, textAlign: 'center' }}>
                    Cadastrar
                </Typography>
                <Stack sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}>
                    <TextField label="Nome:" onChange={(e) => handleChange('nome', e.target.value)} type="text" variant="outlined" fullWidth />
                    <TextField label="Email:" onChange={(e) => handleChange('email', e.target.value)} type="email" variant="outlined" fullWidth />
                    <TextField label="Senha:" onChange={(e) => handleChange('senha', e.target.value)} type="password" variant="outlined" fullWidth />
                </Stack>
                <Button sx={{
                    padding: '15px',
                    backgroundColor: theme.palette.background.backgroundColor,
                    ...fontBodyParams,
                    color: theme.palette.background.text,
                    ":hover": {
                        background: theme.palette.background.backgroundColor
                    }
                }} onClick={handleRegister}>
                    Cadastrar
                </Button>
            </Box>
        </Box>
    );
};

export default RegisterPage;
