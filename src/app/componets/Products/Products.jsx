"use client";
import { useWishlist } from "@/app/Context/WishlistContext";
import { useMemo, useState } from "react"
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


export default function ALLproduct({ products }) {
    const originalProducts = products; 
    const [filtervalue, setfiltervalue] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [sortType, setSortType] = useState("none");
    const{toggleWishlist}=useWishlist()
     const filteredProducts = useMemo(() => {
  let data = [...originalProducts];

  if (filtervalue !== "all") {
    data = data.filter((e) =>
      e.category?.name?.toLowerCase() === filtervalue.toLowerCase()
    );
  }

  const search = searchValue.toLowerCase().trim();

  if (search !== "") {
    data = data.filter((e) =>
      e.name.toLowerCase().includes(search)
    );
  }


  if (sortType === "low") {
    data.sort((a, b) => a.price - b.price);
  }

  if (sortType === "high") {
    data.sort((a, b) => b.price - a.price);
  }



  return data;
       }, [filtervalue, searchValue, sortType, originalProducts]);
    const { wishlist } = useWishlist();

  const productsCards = filteredProducts.map((product) => {
   const isInWishlist = wishlist.some(
  (e) => e.product._id === product._id
);
 
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
        <div className="favorite" onClick={() => {
          toggleWishlist(product)
           }} style={{color : isInWishlist? "red": "#b3b3b398", transition:".3s" , cursor:"pointer"}} ><FaHeart /></div>
      </div>
    );
  });
    return (
        <div className="Catalog">
            <div className="Container">
                <header>
                    <h1>TOMYSKN CATALOG</h1>

                </header>
                <div className="Filters-containers">
                    <div className="filters-catagroy">
                        <p onClick={() => {
                            setfiltervalue("all")
                        }} className={filtervalue=="all" ? "active":""}>All products</p>
                        <p onClick={() => {
                                 setfiltervalue("Skincare")
                           
                        }}className={filtervalue=="Skincare" ? "active":""}>
                            Skin care</p>
                        <p
                            onClick={() => {
                            setfiltervalue("bodycare")
                          
                            }}
                            className={filtervalue=="bodycare" ? "active":""}
                        >body care</p>
                        <p
                            onClick={() => {
                                 setfiltervalue("Haircare")
                
                            }}
                             className={filtervalue=="Haircare" ? "active":""}
                        >Hair care</p>

                    </div>
                    <div className="search">
                                       <input
                       type="search"
                       value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="search by name"
                    />
                    </div>
 
                 <div className="sorts-price">

        <label htmlFor="sort">Sort by price:</label>

{
  sortType === "low" || sortType === "none" ? (
    <FaSortAmountDown
      onClick={() => setSortType("high")}
      className="sort-icon"
    />
  ) : (
    <FaSortAmountUp
      onClick={() => setSortType("low")}
      className="sort-icon"
    />
  )
}
                  </div>
         </div>
                    
         
                <div className="allproducts" key={filtervalue}>
             {
  filteredProducts.length === 0 ? (
    <p style={{color:"#777"}}>There are currently no products available. New products will be added soon.</p>
  ) : (
    productsCards
  )
}
                
                </div>

            </div>
            
            </div>
        
    )
}