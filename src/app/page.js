"use client"
import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/themes";
import RegisterPage from "./register/page";
import { useRouter } from "next/navigation";

const Home = () => {
 

  return (
    <ThemeProvider theme={theme}>  
      {/* <RegisterPage /> */}
    </ThemeProvider>
  );
};

export default Home;
