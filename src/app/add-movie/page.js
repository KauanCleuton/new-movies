"use client"
import React, { useState } from "react"
import Box from '@mui/material/Box'
import CustomContainer from "@/components/CustomContainer"
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import withAuth from "@/utils/withAuth"
import Movies from "@/service/movies.service"
import Loading from "@/components/loading"



const fontBodyParams = {
    fontSize: { lg: '1rem', md: '1.2rem', sm: '1.1rem', xs: '.8rem' },
    lineHeight: { lg: '1rem', md: '1rem', sm: '.88rem', xs: '.9em' },
};



const InsertPage = () => {
    const [loading, setLoading] = useState(false)
    const handleOnChange = async (event) => {
        const { name, value } = event.target

        setData({ ...data, [name]: value })
    }
    const [data, setData] = useState({
        position: 0,
        title: "",
        gender: "",
        year: "",
        resolution: "",
        language: "",
        attended: ""
    });

    const handleAddMovie = async () => {
        try {
            setLoading(true)
            const accessToken = sessionStorage.getItem("accessToken");
            console.log(data, 88888);

            const movies = new Movies();
            const addMovieResponse = await movies.addMovies(data, accessToken);

            console.log("addMovieResponse:", addMovieResponse);
            
            if (addMovieResponse.status === 201) {
                console.log("Filme adicionado com sucesso:", addMovieResponse.data);
                handleClearInput()
                
                return addMovieResponse.data;
            } else {
                console.log("Erro ao adicionar filme. Status:", addMovieResponse.status);
            }
        } catch (error) {
            console.error("Erro ao adicionar filme", error);
            throw error;
        }
        finally {
            setLoading(false)
        }
    };



    const handleClearInput = () => {
        setData({
            position: "",
            title: "",
            gender: "",
            year: "",
            resolution: "",
            language: "",
            attended: ""
        })
    }

    return (
        <>
            {!loading ? (
                <Box sx={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    px: 1,
                    py: { xs: 12, sm: 15 }
                }}>
                    <CustomContainer >
                        <Box component={Paper} sx={{
                            maxWidth: 500,
                            width: "100%",
                            height: { xs: "auto", sm: "730" },
                            background: "#fff",
                            margin: "0 auto",
                            borderRadius: "7px",
                            display: "flex",


                        }}>
                            <Grid container spacing={{ xs: 2, sm: 2 }}>
                                <Grid item xs={12}>
                                    <Box sx={{
                                        width: "100%",
                                        background: "#001928",
                                        color: "#fff",
                                        borderRadius: "7px 7px 0 0",
                                        px: 2,
                                        py: 2
                                    }} >
                                        <Typography sx={{
                                            fontSize: { lg: "1.2rem", md: "1.1rem", sm: "1rem", xs: ".89rem" }
                                        }}>
                                            Adicionar um novo filme
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl>

                                        <Grid container px={2} spacing={{ xs: 1, sm: 3 }} >
                                            <Grid item xs={12}>
                                                <Box sx={{ width: "100%" }} >
                                                    <TextField id="posicao" value={data.position} name="position" onChange={handleOnChange} label="Posição" fullWidth type="number" />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box sx={{ width: "100%" }} >
                                                    <TextField id="titulo" value={data.title} name="title" onChange={handleOnChange} label="Título" fullWidth type="text" />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box sx={{ width: "100%" }} >
                                                    <TextField id="genero" label="Gênero" value={data.gender} name="gender" onChange={handleOnChange} fullWidth type="text" />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box sx={{ width: "100%" }} >
                                                    <TextField id="ano" fullWidth label={"Ano"} type="date" value={data.year} name="year" onChange={handleOnChange} InputLabelProps={{
                                                        shrink: true,
                                                    }} />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl >
                                                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{ color: "#001918" }}>Resolução</FormLabel>
                                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="resolution" onChange={handleOnChange} value={data.resolution}>
                                                        <FormControlLabel value="1080p/3D" label="1080p/3D" control={<Radio sx={{ '&.Mui-checked': { color: "#001918" }, }} />} />
                                                        <FormControlLabel value="720p" label="720p" control={<Radio sx={{ '&.Mui-checked': { color: "#001918" }, }} />} />
                                                        <FormControlLabel value="320p" label="320p" control={<Radio sx={{ '&.Mui-checked': { color: "#001918" }, }} />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box sx={{ width: "100%" }} >
                                                    <TextField id="audio" fullWidth label={"Áudio"} type="text" onChange={handleOnChange} name="language" value={data.language} />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl >
                                                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{ color: "#001918" }}>Já assistiu</FormLabel>
                                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label"
                                                        name="attended" value={data.attended} onChange={handleOnChange}>
                                                        <FormControlLabel value="sim" label="Sim" control={<Radio sx={{ '&.Mui-checked': { color: "#001918" }, }} />} />
                                                        <FormControlLabel value="nao" label="Não" control={<Radio sx={{ '&.Mui-checked': { color: "#001918" }, }} />} />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </FormControl>

                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{
                                        width: "100%",
                                        py: 2,
                                        px: 2,
                                        display: "flex",
                                        gap: 3
                                    }}>
                                        <Button variant="contained" sx={{
                                            textTransform: "none",
                                            py: "16px",
                                            backgroundColor: "#001918",
                                            ":hover": {
                                                backgroundColor: "#001928"
                                            },
                                            ...fontBodyParams
                                        }} onClick={handleAddMovie}>
                                            Adicionar Filme
                                        </Button>
                                        <Button variant="contained" sx={{
                                            textTransform: "none",
                                            px: 4,
                                            backgroundColor: "#001918",
                                            ":hover": {
                                                backgroundColor: "#001928"
                                            },
                                            ...fontBodyParams
                                        }} onClick={handleClearInput}>
                                            Limpar
                                        </Button>
                                        <Button variant="contained" component={Link} href="/" sx={{
                                            textTransform: "none",
                                            px: 4,
                                            backgroundColor: "#001918",
                                            ":hover": {
                                                backgroundColor: "#001928"
                                            },
                                            ...fontBodyParams
                                        }}>
                                            Voltar
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </CustomContainer>

                </Box>
            ) : <Loading />
            }
        </>
    )
}

export default withAuth(InsertPage)