"use client";

import { createContext, useContext,useState } from "react";
import axios from "axios";

const WishlistContext = createContext();

export function WishlistProvider({ children,initialwishlist }) {
  const [wishlist, setWishlist] = useState(initialwishlist)


  async function toggleWishlist(product) {
  const prev=[...wishlist]
  const exist = wishlist.find(
    (e) => e.product._id === product._id
  );

  if (exist) {
    setWishlist(
      wishlist.filter(
        (e) => e.product._id !== product._id
      )
    );
  } else {
    setWishlist([...wishlist, { product }]);
  }

  try {
    const response = await axios.post(
      `https://cosmetics-sable.vercel.app/api/v1/favorites/toggle/${product._id}`,
      {},
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OWNhOGQxNjYwYzA4YjFiNWI5NGYzMmEiLCJpYXQiOjE3Nzg1MDMwNjIsImV4cCI6MTc4NjI3OTA2Mn0.n4DEeO4ZA25GhFSAkuujdWfpM_3eSYzqfiVCvMmcd7s`,
        },
      }
    );

    console.log(response);
    return response.data;

  } catch (error) {
    setWishlist(prev)
    console.log(error.response?.data || error.message);
  }
}



  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,

      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}