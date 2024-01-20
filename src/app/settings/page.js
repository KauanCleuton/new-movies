"use client"
import CustomContainer from '@/components/CustomContainer'
import Box from '@mui/material/Box'
import React, { useRef, useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import ImageCard from '@/components/ImageCard'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';








const fontBodyH1 = {
    fontSize: { lg: '3rem', md: '2.3rem', sm: "2rem", xs: '1.8rem' },
    lineHeight: { lg: 1.2, md: 1.1, sm: .99, xs: '1.7rem' }
}

const SettingsPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    console.log(selectedFile)

    return (
        <Box sx={{
            width: '100vw',
            height: '100vh',
            px: 2,
            display: 'flex',
            py: 15
        }}>
            <CustomContainer >
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography sx={{
                            ...fontBodyH1,
                            textAlign: 'center'
                        }}>Dados Cadastrais</Typography>
                    </Grid>
                    <Grid container item xs={12} justifyContent="center" alignItems="center" position="relative">
                        <ImageCard src={previewImage} />
                        <label htmlFor="fileInput" style={{
                            width: { lg: '50px', md: '40px', sm: '30px', xs: '20px' },
                            height: { lg: '50px', md: '40px', sm: '30px', xs: '20px' },
                            borderRadius: "100%",
                            display: "flex",
                            alignItems: 'center',
                            justifyContent: "center",
                            cursor: 'pointer',
                            position: 'absolute',
                            top: '90%',
                            left: '60%', // Centraliza a label sobre a imagem
                            transform: 'translateX(-50%)', // Ajusta a posição horizontalmente
                        }}>
                            <AddAPhotoIcon sx={{
                                fill: "#001928"
                            }} />
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                        </label>
                    </Grid>


                    <Grid item xs={12}>
                        <Grid container spacing={5} justifyContent="center" alignItems="center">
                            <Grid item xs={12}>
                                <Box sx={{ maxWidth: 540, width: '100%', margin: 'auto' }}>
                                    <TextField id="" label="asd" fullWidth />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ maxWidth: 540, width: '100%', margin: 'auto' }}>
                                    <TextField id="" label="asd" fullWidth />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ maxWidth: 540, width: '100%', margin: 'auto' }}>
                                    <TextField id="" label="asd" fullWidth />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </CustomContainer>

        </Box>
    )
}
export default SettingsPage