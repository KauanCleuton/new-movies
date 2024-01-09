"use client"
import React, { useEffect, useState } from 'react';

import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/header';

const inter = Poppins({ subsets: ['latin'], weight: '500' });

export default function RootLayout({ children }) {

  const [hideHeader, setHideHeader] = useState(false);
  const pagesWithoutHeader = ['/login', '/register'];

  useEffect(() => {
    const handleHeaderVisibility = () => {
      if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        setHideHeader(pagesWithoutHeader.includes(path));
      }
    };

    // Executar a função quando o componente montar e sempre que a rota mudar
    handleHeaderVisibility();
    window.addEventListener('popstate', handleHeaderVisibility);

    // Remover o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('popstate', handleHeaderVisibility);
    };
  }, []);

  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RepoMovies</title>
        {/* <link rel="icon" type="image/x-icon" href="/image/favicon.ico"></link> */}
      </head>
      <body className={inter.className}>
        {!hideHeader && <Header />}
        {children}
      </body>
    </html>
  );
}