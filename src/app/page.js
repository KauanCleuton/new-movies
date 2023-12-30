"use client"
import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import theme from "@/themes"
import RegisterPage from "./register/page"

const Home = () => {
  return (
    <ThemeProvider theme={theme}>  
        {/* <RegisterPage /> */}
    </ThemeProvider>
  )
}

export default Home