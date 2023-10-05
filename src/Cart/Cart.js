import './Cart.css';
import electronics from '../data/ElectronicsData';
import fashion from '../data/FashionData';
import furnitures from '../data/FurnitureData';
import CartItem from '../CartItem/CartItem';
import Cameras from '../assets/Electronics/Cameras.png';

function Cart({open, onClose}){
    if (!open) return null;
    return(
        <div className="cart-container">
            <div className='header-container'>
                <h1>Cart</h1>
                <button className='close-btn' onClick={onClose}>x</button>
            </div>
            <div className='cart-items'>
                <CartItem label="Camera" price="4000" quantity="3" image={Cameras}/>
                <CartItem label="Camera" price="4000" quantity="3" image={Cameras}/>
                <CartItem label="Camera" price="4000" quantity="3" image={Cameras}/>
                <CartItem label="Camera" price="4000" quantity="3" image={Cameras}/>
            </div>
            <div className='payment-area'>
                <div class="amount">Amount: Rs. 0</div>
                <button class="yellow-btn">Proceed to Payment</button>
            </div>
        </div>
    );
}

export default Cart;