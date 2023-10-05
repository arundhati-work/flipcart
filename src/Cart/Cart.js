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
                {
                    electronics.map((electronic)=>{
                        if (electronic.quantity>0){
                            return <CartItem label={electronic.label} price={electronic.price} quantity={electronic.quantity} image={electronic.image}/>
                        }
                        else{
                            return null;
                        }
                    })
                }
                {
                    fashion.map((fashion)=>{
                        if (fashion.quantity>0){
                            return <CartItem label={fashion.label} price={fashion.price} quantity={fashion.quantity} image={fashion.image}/>
                        }
                        else{
                            return null;
                        }
                    })
                }
                {
                    furnitures.map((furniture)=>{
                        if (furniture.quantity>0){
                            return <CartItem label={furniture.label} price={furniture.price} quantity={furniture.quantity} image={furniture.image}/>
                        }
                        else{
                            return null;
                        }
                    })
                }
                {/* <CartItem label="Camera" price="4000" quantity="3" image={Cameras}/>
                <CartItem label="Camera" price="4000" quantity="3" image={Cameras}/>
                <CartItem label="Camera" price="4000" quantity="3" image={Cameras}/>
                <CartItem label="Camera" price="4000" quantity="3" image={Cameras}/> */}
            </div>
            <div className='payment-area'>
                <div className="amount">Amount: Rs. 0</div>
                <button className="yellow-btn">Proceed to Payment</button>
            </div>
        </div>
    );
}

export default Cart;