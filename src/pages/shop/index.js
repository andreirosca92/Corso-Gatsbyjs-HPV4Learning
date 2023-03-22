import { Link } from 'gatsby';
import React from 'react';

const ShopHome = () => {
  return <div>
   <h1>ShopHome</h1>
    <nav 
   style={{
    display: "flex",
    gap: "4px",

   }}
   >
    <Link to="/">Home</Link>
    <Link to="/shop/shoes/">Shoes</Link>
    <Link to="/shop/socks/">Socks</Link>
 
   </nav>
  </div>
  
}

export default ShopHome;
