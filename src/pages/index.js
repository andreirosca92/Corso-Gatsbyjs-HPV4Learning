import * as React from "react";
import {Link} from 'gatsby';
export default function Home() {
  return (
  <div>
  <h1>Sono la home page</h1>
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
  </div>
  )
}
