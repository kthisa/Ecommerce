/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import '../App.css'


// eslint-disable-next-line react/prop-types
const ProductHard = ({product}) => {
  return (
<div className="cards">
    <div className="cardItems">
      <Link to={'/product/' + product._id} />
      <img className="cardimages" id="img"
        // eslint-disable-next-line react/prop-types
        src={product.images[0].image} /><br></br>
      <div className="cardtit"> 
        <h5 className="cardtitle">
          <Link className="link" to={'/product/' + product._id}>{product.name}</Link>
        </h5> 
                 <div className="ratings mt-auto">
                    <div className="rating-outer">
                    <div className="rating-inner" style={{width : `${product.rating/5 * 100}%`}} ></div>
                  </div>
        </div>
        <p className="cardPrice">Price:₹ <del>{product.del}</del> / {product.price}</p>
        {/* <p to={'/product/' + product._id} className="descrip">{product.description}</p> */}
        <Link to={'/product/' + product._id}><button className="btnChoose">Choose Item</button></Link>
       </div>
      </div>

    </div>


         
  )

}

export default ProductHard
