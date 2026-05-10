
import FAQ from "./componets/FAQ/FAQ";
import "./globals.css"
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

export default async function Home() {
  const products = await getProducts();
  console.log(products)
  const productsCards = products.slice(0, 4).map((product) => {
    return (
      <div key={product._id} className="product">
        <div className="Image">
          <img src={product.images[0]} alt={product.name} />
        </div>

        <div className="text">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p style={{ fontSize: "19px", fontWeight: "bolder" }}>price : {product.price} Egp</p>
        </div>

        <div className="action">
          {product.stock === 0 ? (
            <button>Out of stock</button>
          ) : (
            <button>Add to cart</button>
          )}
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="Hero-section">
        <div className="text">
          <h2>
            you don't need more skincere products.
            <br />
            just better onees
          </h2>

          <p>
            Discover a smarter way to care for your skin with carefully selected
            formulas that actually work.
            Glow naturally, simplify your routine, and choose products made for
            real results—not just promises.
          </p>

          <button>explore now</button>
        </div>
      </div>

      <div className="Bestseller">
        <div className="container">
          <header style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
<h2>TOMYSKIN best seller</h2>
          <p> shop all</p>
          </header>
          

          <div className="products">
            {productsCards}
          </div>
        </div>
      </div>
      <FAQ/>

  
    </>
  )
}
