/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './App.css'


export default function ProductDetail({ cartItems, setCartItems }) {
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        fetch(import.meta.env.REACT_APP_API_URL + '/product/' + id)
            .then(res => res.json())
            .then(res => setProduct(res.product))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function addToCart() {
        const itemExist = cartItems.find((item) => item.product._id == product._id)
        if (!itemExist) {
            const newItem = { product, qty };
            setCartItems((state) => [...state, newItem]);
            toast.success("Cart Item added succesfully!")
        }
    }

    function increaseQty() {
        if (product.stock == qty) {
            return;
        }
        setQty((state) => state + 1);
    }

    function decreaseQty() {
        if (qty > 1) {
            setQty((state) => state - 1);
        }
    }


    return product && <div className="containers">
        <div className="row">
            <img src={product.images[0].image} alt="sdf" height="500" width="500" />
            <h3 className='prname'>{product.name}</h3>
            <p id="product_id">Product #{product._id}</p>

    

            <div className="rating-outer">
                <div className="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }}></div>
            </div>


          

            <p id="product_price">${product.price}</p>
            <div className="stockCounter d-inline">
                <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                <input type="number" className="form-control count d-inline" value={qty} readOnly />

                <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
            </div>
            <button type="button" onClick={addToCart} disabled={product.stock == 0} id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>

          

            <p>Status: <span id="stock_status" className={product.stock > 0 ? 'text-success' : 'text-danger'}>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

        
            <h4 className="mt-2">Description:</h4>
            <p>{product.description}</p>
         
            <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>

            <div className="rating w-50"></div>

        </div>

    </div>
       
}