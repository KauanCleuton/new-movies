"use client"
import CustomContainer from '@/components/CustomContainer'
import Box from '@mui/material/Box'
import React, { useRef, useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import ProfilePictureEditor from './components/PictureEditor'
import Button from '@mui/material/Button'
import withAuth from '@/utils/withAuth'
import Auth from '@/service/auth.service'


const fontBodyH1 = {
    fontSize: { lg: '3rem', md: '2.3rem', sm: "2rem", xs: '1.8rem' },
    lineHeight: { lg: 1.2, md: 1.1, sm: .99, xs: '1.7rem' }
}

const SettingsPage = () => {

    const [edit, setEdit] = useState({
        name: "",
        email: "",
        foto_url: "",
        password: "",
        oldPassword: ""
    })
    const handleUrl = (url) => {
        setEdit({ ...edit, foto_url: url })
    }

    const handleChangeEdit = (event) => {
        const { name, value } = event.target
        setEdit({ ...edit, [name]: value })
    }
    const handleEditUser = async () => {
        const auth = new Auth()
        console.log(edit)
        try {
            const accessToken = sessionStorage.getItem("accessToken")
            const user = await auth.editUser(edit, accessToken)

            console.log(user.data.user)
            window.location.reload()
            return user.data
        } catch (error) {
            console.error('Erro ao editar usuário!')
            throw error
        }
    }
    return (
        <Box sx={{
            width: '100vw',
            height: "100vh",
            px: 2,
            display: 'flex',
            py: { lg: 15, md: 13, sm: 12, xs: 15 },
            marginBottom: 15
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
                        <ProfilePictureEditor foto_url={handleUrl} />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={3} justifyContent="center" alignItems="center">
                            <Grid item xs={12}>
                                <Box sx={{ maxWidth: 540, width: '100%', margin: 'auto' }}>
                                    <TextField color='info' label="Nome" name={"name"} value={edit.name} onChange={handleChangeEdit} fullWidth />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ maxWidth: 540, width: '100%', margin: 'auto' }}>
                                    <TextField color='info' label="Email" name="email" value={edit.email} onChange={handleChangeEdit} fullWidth />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ maxWidth: 540, width: '100%', margin: 'auto' }}>
                                    <TextField color='info' label="Senha Nova" fullWidth name='password' value={edit.password} onChange={handleChangeEdit} />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ maxWidth: 540, width: '100%', margin: 'auto' }}>
                                    <TextField color='info' label="Nova Antiga" fullWidth name='oldPassword' value={edit.oldPassword} onChange={handleChangeEdit} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            py: 2
                        }}>
                            <Button variant="contained" sx={{
                                py: "8px",
                                textTransform: "none",
                                width: "20%",
                                fontSize: { lg: '1.1rem', md: "1rem", sm: ".99rem", xs: ".899rem" },
                                backgroundColor: "#001928",
                                ":hover": {
                                    backgroundColor: "#001928"
                                }
                            }} onClick={handleEditUser}>
                                Alterar
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

            </CustomContainer>

        </Box>
    )
}
export default withAuth(SettingsPage)