"use client"
import CustomContainer from '@/components/CustomContainer'
import Box from '@mui/material/Box'
import React, { useRef, useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import ProfilePictureEditor from './components/PictureEditor'
import Button from '@mui/material/Button'








const fontBodyH1 = {
    fontSize: { lg: '3rem', md: '2.3rem', sm: "2rem", xs: '1.8rem' },
    lineHeight: { lg: 1.2, md: 1.1, sm: .99, xs: '1.7rem' }
}

const SettingsPage = () => {
    

    return (
        <Box sx={{
            width: '100vw',
            height: "100vh",
            px: 2,
            display: 'flex',
            py: 10
        }}>
            <CustomContainer >
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography sx={{
                            ...fontBodyH1,
                            textAlign: 'center'
                        }}>Dados Cadastrais</Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}

                        
                    >
                        <ProfilePictureEditor />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={3} justifyContent="center" alignItems="center">
                            <Grid item xs={12}>
                                <Box sx={{ maxWidth: 540, width: '100%', margin: 'auto' }}>
                                    <TextField color='info' label="Nome" fullWidth />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ maxWidth: 540, width: '100%', margin: 'auto' }}>
                                    <TextField color='info' label="Email" fullWidth />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ maxWidth: 540, width: '100%', margin: 'auto' }}>
                                    <TextField color='info' label="Senha" fullWidth />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Button variant="contained" sx={{
                                py: "8px",
                                textTransform: "none",
                                px: 7,
                                fontSize: { lg: '1.1rem', md: "1rem", sm: ".99rem", xs: ".899rem" },
                                backgroundColor: "#001928",
                                ":hover": {
                                    backgroundColor: "#001928"
                                }
                            }}>
                              Alterar
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

            </CustomContainer>

        </Box>
    )
}
export default SettingsPage