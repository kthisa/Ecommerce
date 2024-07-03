import { useEffect, useState } from "react"
import ProductCard from "../Components/ProductHard";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [products, setProduct] = useState([]);
  const [keywordsearch] = useSearchParams();


  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_KEY
    fetch(apiUrl + '/product?' + keywordsearch)
      .then((res) => res.json())
      .then((res) => setProduct(res.product))

  }, [keywordsearch])

  return (
    <div className="cartconatain">


      <h1 id="products">Latest Products</h1>

      <section id="product" className="container">
        <div className="rowss">
          {products.map((product) =>
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          )}
        </div>
      </section>

    </div>
  )
}

export default Home
