import "./Cart.scss";
import { MdClose } from "react-icons/md"; 
import { BsCartX } from "react-icons/bs";

import CartItem from "./CartItem/CartItem";

const Cart = ({ setshowCart }) => {
    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shoping Cart</span>
                    <span className="close-btn" onClick={() => setshowCart(false)} >
                    <MdClose />
                    <span className="text">close</span>
                    </span>
                </div>
                {/* <div className="empty-cart">
                    <BsCartX />
                    <span>No products in the Cart</span>
                    <button className="return-cta">RETURN TO SHOP</button>
                </div> */}

                <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="text totel">&#8377;1234</span>
                        </div>
                        <div className="button">
                            <button className="checkout-cta">Checkout</button>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Cart;
