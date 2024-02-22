"use client"
import React, { useEffect, useState } from "react";
import { Grid, Box, TextField, Autocomplete, Button, Container, Link } from '@mui/material'
import TableComponente from "@/components/Table";
import CustomContainer from "@/components/CustomContainer";
import { ButtonComponent } from "@/components/Button";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import withAuth from "@/utils/withAuth";

const Home = () => {



  const [rows, setRows] = useState([
    {
      posicao: 1,
      titulo: 'A Origem',
      genero: 'Ação/Ficção Científica',
      ano: '2010',
      resolucao: '1080p',
      audio: 'Inglês',
      assistido: 'Sim'
    },
    {
      posicao: 2,
      titulo: 'Um Sonho de Liberdade',
      genero: 'Drama',
      ano: '1994',
      resolucao: '720p',
      audio: 'Inglês',
      assistido: 'Sim'
    },
    {
      posicao: 3,
      titulo: 'O Poderoso Chefão',
      genero: 'Drama/Crime',
      ano: '1972',
      resolucao: '4K',
      audio: 'Italiano',
      assistido: 'Sim'
    },
    // ... (restante da lista)
  ]);
  const [selectType, setSelectType] = useState(null);
  const [valueFilter, setValueFilter] = useState("");
  const typesFilter = ['titulo', 'genero', 'ano', 'resolucao', 'audio'];

  const handleFilterRows = () => {
    const newRowsFilter = rows.filter(row => {
      if (selectType && row[selectType]) {
        return row[selectType].toString().toLowerCase().includes(valueFilter.toLowerCase());
      }
      return false;
    });
    console.log(newRowsFilter);
    setRows(newRowsFilter);
  };

  const handleDeleteRows = (position) => {
    const rowsDelete = rows.filter(item => item.posicao !== position)
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
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Filme"
                    fullWidth
                    value={valueFilter}
                    onChange={(e) => setValueFilter(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={typesFilter}
                    fullWidth
                    value={selectType}
                    onChange={(e, value) => setSelectType(value)}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => <TextField {...params} label="Filme" />}
                  />
                </Grid>
              </Grid>

            </Grid>
            <Grid item xs={12} sm={4} >
              <Box sx={{
                width: "100%",
                display: "flex",
                gap: 2,
                justifyContent: "space-around"
              }}>
                <ButtonComponent text={"Buscar"} handleBuscar={handleFilterRows} />

                <Button component={Link} href="/add-movie" variant="contained" sx={{
                  background: '#001928',
                  color: '#fff',
                  py: 2,
                  ":hover": {
                    background: '#001919'
                  }
                }}>
                  <AddCircleOutlineOutlined sx={{ fill: "#fff" }} />
                </Button>
              </Box>
            </Grid>
          </Grid>
          <TableComponente onClick={handleDeleteRows} />
        </Container>
      </CustomContainer>
    </Box>
  );
};

export default withAuth(Home);
