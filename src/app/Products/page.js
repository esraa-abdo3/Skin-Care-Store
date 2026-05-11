import ALLPosts from "../componets/Products/Products";
import "./products.css"
async function getProducts() {
  const res = await fetch("https://cosmetics-sable.vercel.app/api/v1/products", {
    cache: "no-store", 
  });
    if (!res.ok) {
      console.log(res)
    throw new Error("Failed to fetch products");
  }
 const result= await res.json();
  return result.data
}
export default async function Products() {
    const items = await getProducts();
    return (
        <ALLPosts products={items}/>
     )
 }
