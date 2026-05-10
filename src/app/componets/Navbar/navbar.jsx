"use client";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css"
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const[active, setactive]=useState("home")

    return (
        <>
            <div className="Navbar">
                <div className="container">

                    <div className="menuIcon" onClick={() => setOpen(true)}>
                        ☰
                    </div>

                    <ul className="links">
                        <li><Link href={"/"} className={active === "home" ?"active":""}
                            onClick={() => {
                                setactive("home")
                            }}
                        >Home</Link></li>
                        <li><Link href={"/about"} className={active === "about" ? "active":""}
                                onClick={() => {
                                setactive("about")
                            }}
                        >About</Link></li>
                        <li><Link href={"/contact"} className={active === "Contact" ? "active":""}
                                     onClick={() => {
                                setactive("Contact")
                            }}
                        >Contact Us</Link></li>
                        <li><Link href={"/products"} className={active === "products" ? "active":""}
                                            onClick={() => {
                                setactive("products")
                            }}
                        >Products</Link></li>
                    </ul>

                    <div className="logoname">
                        TOMYSKN
                    </div>


                    <div className="icons">
                        <Link href={"/wishlist"} className="wishlist"><FaHeart /></Link>
                        <Link href={"/cart"}><FaShoppingCart /></Link>
                        <Link href={"/login"}><FaUser /></Link>
                    </div>

                </div>
            </div>

            {/* Sidebar */}
            <div className={`sidebar ${open ? "active" : ""}`}>
                
                <span className="close" onClick={() => setOpen(false)}>✖</span>

                <div className="logoname">Skincare</div>

                <ul className="sidebar-links">
                    <li><Link href={"/"} onClick={() => setOpen(false)}>Home</Link></li>
                    <li><Link href={"/about"} onClick={() => setOpen(false)}>About</Link></li>
                    <li><Link href={"/contact"} onClick={() => setOpen(false)}>Contact Us</Link></li>
                    <li><Link href={"/products"} onClick={() => setOpen(false)}>Products</Link></li>
                </ul>

         

            </div>

            {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
        </>
    );
}