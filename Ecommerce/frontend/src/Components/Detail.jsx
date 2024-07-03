/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


const Detail = ({ card, setCard }) => {
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1)
    const { id } = useParams();

    //   useEffect(()=>{
    //     const apiUrl=import.meta.env.VITE_API_KEY
    //     fetch(apiUrl+'/product/'+id)
    //     .then((res) => res.json())
    //     .then((res) => setProduct(res.product))

    //   },[])

    const addtoCard = () => {
        const cait = card.find((item) => item.product._id == product._id);
        if (!cait) {
            const itemsnew = { product, qty };
            setCard((state) => [...state, itemsnew])
            toast.success(`${product.name} ADD succesfully`)
        }


    }

    const increase = () => {
        if (product.stock == qty) {
            return;
        }
        setQty((status) => status + 1)
    }
    const decrease = () => {
        if (qty == 1) {
            return
        }
        setQty((status) => status - 1)
    }




    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_KEY
        fetch(apiUrl + '/product/' + id)
            .then((res) => res.json())
            .then((res) => setProduct(res.product))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    //     fetch(apiUrl+'/product?'+keywordsearch)
    //     .then((res) => res.json())
    //     .then((res) => setProduct(res.product))

    //   },[keywordsearch])

    return (product &&
        <div>
            <div className="container">
                <div className="images">
                    
                        <img src={product.images[0].image} alt="sdf" height="500" width="500" />
            

                    <div className="name">
                        <h3>{product.name}</h3>
                        <p id="product_id">Product # {product._id}</p>

                 
                        <div className="rating-outer">
                            <div className="rating-inner" style={{width : `${product.ratings/5 * 100}%`}}></div>
                        </div>


                   

                        <p id="price">Price:₹{product.price}</p>
                        <div className="stockCounter">
                            <span className="plus" onClick={decrease}>-</span>

                            <input type="number" className="form-control count d-inline" value={qty} readOnly />

                            <span className="plus" onClick={increase}>+</span>
                        </div>
                        <button type="button" id="cart_btn" className="btn" onClick={addtoCard} disabled={product.stock == 0} >Add to Cart</button>

                        <br></br>

                        <p className="sts">Status: <span id="stock_status" className={product.stock == 0 ? 'red' : 'green'} >{product.stock > 0 ? "In Stock" : " out of stock"}</span></p>

                      

                        <h4 className="des"></h4>
                        <p className="pd">{product.description}</p>
                        <p className="stock">Stock : {product.stock}</p>
             
                        <p id="product_seller "> Sold By :<strong>{product.seller}</strong></p>

                        <div className="rating w-50"></div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Detail
