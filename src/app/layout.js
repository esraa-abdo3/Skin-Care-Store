import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./componets/Navbar/navbar";
import Footer from "./componets/footer/Footer";


export default function RootLayout({ children }) {
  return (
    <>
          <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
      </html>
      <Footer/>
      </>

  );
}
