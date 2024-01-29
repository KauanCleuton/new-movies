"use client"
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/themes";
import { Grid, Box, TextField, Autocomplete, Button, Container, Link } from '@mui/material'
import TableComponente from "@/components/Table";
import CustomContainer from "@/components/CustomContainer";
import { ButtonComponent } from "@/components/Button";
import { AddCircleOutlineOutlined } from "@mui/icons-material";

const Home = () => {



  const [rows, setRows] = useState([
    {
      position: 1,
      title: 'Inception',
      gender: 'Ação/Ficção Científica',
      year: '2010',
      resolution: '1080p',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 2,
      title: 'The Shawshank Redemption',
      gender: 'Drama',
      year: '1994',
      resolution: '720p',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 3,
      title: 'The Godfather',
      gender: 'Drama/Crime',
      year: '1972',
      resolution: '4K',
      audio: 'Italiano',
      watched: 'Sim'
    },
    {
      position: 4,
      title: 'The Dark Knight',
      gender: 'Ação/Drama',
      year: '2008',
      resolution: '1080p',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 5,
      title: 'Pulp Fiction',
      gender: 'Crime/Drama',
      year: '1994',
      resolution: '720p',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 6,
      title: 'Schindler\'s List',
      gender: 'Biografia/Drama',
      year: '1993',
      resolution: '4K',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 7,
      title: 'Fight Club',
      gender: 'Drama',
      year: '1999',
      resolution: '1080p',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 8,
      title: 'Forrest Gump',
      gender: 'Drama/Romance',
      year: '1994',
      resolution: '720p',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 9,
      title: 'The Matrix',
      gender: 'Ação/Ficção Científica',
      year: '1999',
      resolution: '4K',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 10,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      gender: 'Aventura/Fantasia',
      year: '2001',
      resolution: '1080p',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 11,
      title: 'Goodfellas',
      gender: 'Biografia/Crime',
      year: '1990',
      resolution: '720p',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 12,
      title: 'The Silence of the Lambs',
      gender: 'Crime/Drama',
      year: '1991',
      resolution: '4K',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 13,
      title: 'The Shining',
      gender: 'Drama/Horror',
      year: '1980',
      resolution: '1080p',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 14,
      title: 'The Departed',
      gender: 'Crime/Drama',
      year: '2006',
      resolution: '720p',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 15,
      title: 'Gladiator',
      gender: 'Ação/Drama',
      year: '2000',
      resolution: '4K',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 16,
      title: 'The Godfather: Part II',
      gender: 'Drama/Crime',
      year: '1974',
      resolution: '1080p',
      audio: 'Italiano',
      watched: 'Sim'
    },
    {
      position: 17,
      title: 'The Green Mile',
      gender: 'Drama/Fantasia',
      year: '1999',
      resolution: '720p',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 18,
      title: 'American History X',
      gender: 'Crime/Drama',
      year: '1998',
      resolution: '4K',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 19,
      title: 'The Prestige',
      gender: 'Drama/Mistério',
      year: '2006',
      resolution: '1080p',
      audio: 'Inglês',
      watched: 'Sim'
    },
    {
      position: 20,
      title: 'Se7en',
      gender: 'Crime/Drama',
      year: '1995',
      resolution: '720p',
      audio: 'Inglês',
      watched: 'Sim'
    },
  ]);

  const handleDeleteRows = (position) => {
    const rowsDelete = rows.filter(item => item.position !== position)
    setRows(rowsDelete)
  }

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      mb: { xs: 15, sm: 0 },
      py: { xs: 10, sm: 15 }
    }}>
      <CustomContainer>
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Grid container justifyContent="space-between" alignItems="center" spacing={2} sx={{ padding: '5px 0' }}>
            <Grid item xs={12} sm={8}>
              <Box sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: { xs: 'column', sm: 'row' }, }}>
                <TextField label="Input 1" sx={{ flex: 1 }} />
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={['Kauan', 'Rian']}
                  sx={{ flex: 1 }}
                  renderInput={(params) => <TextField {...params} label="Movie" />}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'space-evenly' }}>
                <ButtonComponent children={"Buscar"} />
                <Button component={Link} href="/add-movie" variant="contained" sx={{
                  background: '#001928',
                  padding: "20px",
                  color: '#fff',
                  ":hover": {
                    background: '#001919'
                  }
                }}>
                  <AddCircleOutlineOutlined sx={{ fill: "#fff" }} />
                </Button>


              </Box>
            </Grid>
          </Grid>
          <TableComponente data={rows} onClick={handleDeleteRows} />
        </Container>
      </CustomContainer>
    </Box>
  );
};

export default Home;
