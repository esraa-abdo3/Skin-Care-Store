"use client";
import "./wishlist.css"

import { useWishlist } from "@/app/Context/WishlistContext";
import { MdDelete } from "react-icons/md";

export default function Wishlistclient() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="Wishlist">
      <div className="container">
        <header>
          <h1>your Wishlist</h1>
              </header>
              <div className="cards">
                    
            {wishlist.length === 0 ? (
              <tr>
                <td colSpan="4">No products in wishlist</td>
              </tr>
            ) : (
              wishlist.map((e) => (
                <div key={e._id} className="card">
                  {/* Product */}
                  <div className="part">
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                      <img
                        src={e.product.images[0]}
                        alt={e.product.name}
                        width="120"
                        height="120"
                        style={{ objectFit: "cover", borderRadius: "8px" }}
                              />
                              <div className="text">
                                  <h3>{e.product.name}</h3>
                                  
                                  <p style={{ color: "#777" }}>{e.product.description}</p>
                         <p>  <span style={{fontWeight:"bold"}}>price :</span>{e.product.price} EGP</p>
                                                <button
                      disabled={e.product.stock === 0}
                      style={{
                        background: e.product.stock === 0 ? "#ccc" : "transparent",
                        color:e.product.stock === 0 ?"black": "rgb(161 14 48)",
                        border: e.product.stock === 0 ?"1px solid #ccc":"1px solid rgb(161 14 48)",
                        padding: "7px 10px",
                        borderRadius: "8px",
                          cursor: e.product.stock === 0 ? "not-allowed" : "pointer",
                        fontWeight:"bold"
                      }}
                    >
                   {e.product.stock===0 ? "out of stock" :"Add to cart"}   
                    </button>
                                
                  
                              </div>
                    
                    </div>
                  </div>

                



                  {/* Actions */}
                  <div>
                    <button
                      onClick={() => toggleWishlist(e.product)}
                      style={{
                        background: "#ff4d4f",
                        color: "#fff",
                        border: "none",
                        padding: "6px 10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                          marginRight: "8px",
                        transition:".3s"
                              }}
                              className="delete-btn"
                    >
                      <MdDelete/>
                    </button>

                  </div>
           </div>
              ))
            )}
                  
              </div>



      </div>
    </div>
  );
}