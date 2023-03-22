import React from 'react';
import { Link } from 'gatsby';
export const Navbar = () => {
  return (
    <nav 
   style={{
    display: "flex",
    gap: "4px",

   }}
   >
    <Link to="/about/">About</Link>
    <Link to="/shop/">Shop</Link>
    <Link to="/contact/">Contact</Link>
   </nav>
  )
}
