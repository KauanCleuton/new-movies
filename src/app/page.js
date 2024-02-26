"use client"
import React, { useEffect, useState } from "react";
import { Grid, Box, TextField, Autocomplete, Button, Container, Link } from '@mui/material'
import TableComponente from "@/components/Table";
import CustomContainer from "@/components/CustomContainer";
import { ButtonComponent } from "@/components/Button";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import withAuth from "@/utils/withAuth";
import Movies from "@/service/movies.service";
import Loading from "@/components/loading";

const Home = () => {

  const [loading, setLoading] = useState(false)


  const [filter, setFilter] = useState({
    option: "",
    value: ""
  })
  const typesFilter = ['title', 'gender', 'year', 'resolution', 'language'];


  const handleDeleteRows = async (id) => {
    try {
      setLoading(true)
      const accessToken = sessionStorage.getItem("accessToken");

      const movies = new Movies();
      const addMovieResponse = await movies.deleteMovies(id, accessToken);

      console.log("addMovieResponse:", addMovieResponse);

      return addMovieResponse.data
    } catch (error) {
      console.error("Erro ao adicionar filme", error);
      throw error;
    }
    finally {
      setLoading(false)
    }
  }
  const [rows, setRows] = useState([]);

  const handleFilterData = async () => {
    const movies = new Movies()
    try {
      setLoading(true)
      const accessToken = sessionStorage.getItem("accessToken")
      const filterMovies = await movies.filterMovies(filter, accessToken)
      console.log(filterMovies.data.data)
      setRows(filterMovies.data.data);
      
      setFilter({
        option: "",
        value: ""
      })
      return filterMovies.data
    } catch (error) {
      console.error('Erro ao filtrar filmes do usuário!', error);
      throw error;
    }
    finally {
      setLoading(false)
    }
  }



  const getData = async () => {
    const movies = new Movies();
    try {
      setLoading(true)
      const accessToken = sessionStorage.getItem("accessToken");

      const response = await movies.getList(accessToken);
      console.log(response.data.message)
      setRows(response.data.message);


    } catch (error) {
      console.error('Erro ao obter filmes do usuário!', error);
      throw error;
    }
    finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!loading ? (
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
                        value={filter.value}
                        onChange={(e) => setFilter({ ...filter, value: e.target.value })}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={typesFilter}
                        fullWidth
                        value={filter.option}
                        onChange={(e, value) => setFilter({ ...filter, option: value })}
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
                    <ButtonComponent text={"Buscar"} handleBuscar={handleFilterData} />

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
              <TableComponente data={rows} onClick={handleDeleteRows} />
            </Container>
          </CustomContainer>
        </Box>
      ) : <Loading />
      }
    </>
  );
};

export default withAuth(Home);
