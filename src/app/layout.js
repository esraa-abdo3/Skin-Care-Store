import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./componets/Navbar/navbar";
import Footer from "./componets/footer/Footer";
import { WishlistProvider } from "./Context/WishlistContext";
import getWishlist from "./Context/Wishlistserver";



export default async function RootLayout({ children }) {
  const initialwishlist = await getWishlist()
  console.log("inital wishlist", initialwishlist)

  return (
    <>
          <html lang="en">
        <body>
          <WishlistProvider initialwishlist={initialwishlist}>
        <Navbar/>
            {children}
               </WishlistProvider>
      </body>
      </html>
      <Footer/>
      </>

  );
}
