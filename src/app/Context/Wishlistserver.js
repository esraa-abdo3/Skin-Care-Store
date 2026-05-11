export default async function getWishlist() {
    //   const token = localStorage.getItem("token");
  const res = await fetch("https://cosmetics-sable.vercel.app/api/v1/favorites/my-favorites", {
      cache: "no-store",
      
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OWNhOGQxNjYwYzA4YjFiNWI5NGYzMmEiLCJpYXQiOjE3Nzg1MDMwNjIsImV4cCI6MTc4NjI3OTA2Mn0.n4DEeO4ZA25GhFSAkuujdWfpM_3eSYzqfiVCvMmcd7s`,
      },
  })
    if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
 const result= await res.json();
  return result.data
}