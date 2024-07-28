/* eslint-disable react/prop-types */
import { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify";
import '../App.css'


const Cart = ({ card, setCard }) => {
    const [complete,setComplete]=useState(false);
    const increase = (item) => {

        if (item.product.stock == item.qty) {
            return;
        }
        const updateItem = card.map((i) => {
            if (i.product_id == item.product_id) {
                i.qty++
            }
            return i;
        })
        setCard(updateItem)

    }

    const decrease = (item) => {

        if (item.qty <= 1) {
            return;
        }
        const updateItem = card.map((i) => {
            if (i.product_id == item.product_id) {
                i.qty--
            }
            return i;
        })
        setCard(updateItem)

    }

    const deleteitem = (item) => {
        const updateItem = card.filter((i) => {
            if (i.product._id !== item.product._id) {
                return true;
            }
        })
        setCard(updateItem)

    }

    const placeOrder=()=>{
        const apiUrl=import.meta.env.VITE_API_KEY
        fetch(apiUrl+'/order' ,{
            method:'POSt',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(card)

        }).then(()=>{
            setCard([]);
            setComplete(true);
            toast.success("Order Placed")
        })
        
    }

    return ( card.length > 0 ?
        <div>
        <body>
            <div className="container">
                <h2 className="items">Your Cart:{card.length} items</h2>

                <div className="rows">
                    
                        {card.map((item) =>
                        (
                            <Fragment  key={item.product._id}>
                                <hr />
                                <div className="cart1"  >
                                    <div className="row">
                                        <div className="images">
                                            <img src={item.product.images[0].image} alt="Laptop" height="90" width="115" />
                                        </div>
                                        <div className="listproduct">
                                        <div className="nameItem">
                                            <Link className="names"  to={'/product/' + item.product._id}>{item.product.name}</Link>
                                        </div>


                                        <div className="price">
                                            <p id="card_item_price">₹{item.product.price}</p>
                                        </div>

                                            <div className="stockk">
                                                <span className="plus" onClick={() => decrease(item)}>-</span>
                                                <input type="number" className="form" value={item.qty} readOnly />

                                                <span className="plus" onClick={() => increase(item)}>+</span>
                                            </div>
                                        </div>    
                                        <div className="delete">
                                            <img  onClick={() => deleteitem(item)} className="fas"  src="/products/delete.png" alt="" />
                                        </div>                                 
                                           
                                        </div>
                                       
                                      
                                    </div>
                            </Fragment>
                        ))}
                        <div id="order_summary">
                            <h4>Order Summary</h4>
                            <p>Subtotal:  <span className="order-summary-values">{card.reduce((acc, item) => (acc + item.qty),0)} (Units)</span></p>
                            <p>Total: <span className="order-summary-values">${Number(card.reduce((acc,item)=> (acc + item.product.price * item.qty), 0)).toFixed(2)}</span></p>
                            <button id="checkout_btn" className="btn " onClick={placeOrder}>Place Order</button>
                        </div>
                </div>
            </div>
        </body>

    </div> :(!complete ?  <h2 className="end" id="end">Your Cart is Empty <br></br>&#128530; </h2> : <Fragment><h2 className="end">  order has been success<br></br>&#128525;</h2></Fragment> )
    )
}

export default Cart
