import React from 'react';
import "../layout.css";
import { Navbar } from './Navbar';
import {Footer} from './Footer';
export const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        <main className="container">
          {children}
        </main>
        
        <Footer />
    
    </>
  )
}
