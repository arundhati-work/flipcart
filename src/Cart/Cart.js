import './Cart.css';
import electronics from '../data/ElectronicsData';
import fashion from '../data/FashionData';
import furnitures from '../data/FurnitureData';
import CartItem from '../CartItem/CartItem';

function Cart({open, onClose, totalAmount, setTotalAmount, overallQuant, handleOverallQuant}){
    if (!open) return null;
    const handleTotalAmount = (obj,val) => {
        var oldAmount = obj.price*obj.quantity;
        var newAmount = obj.price*val;
        var netChange = totalAmount - oldAmount + newAmount;
        setTotalAmount(netChange);
        obj.quantity = val;
    }
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
                            return <CartItem key={electronic.id} label={electronic.label} price={electronic.price} quantity={electronic.quantity} image={electronic.image} setVal={(val)=>handleTotalAmount(electronic,val)} overallQuant={overallQuant} handleOverallQuant={(val)=> handleOverallQuant(val)}/>
                        }
                        else{
                            return null;
                        }
                    })
                }
                {
                    fashion.map((fashion)=>{
                        if (fashion.quantity>0){
                            return <CartItem key={fashion.id} label={fashion.label} price={fashion.price} quantity={fashion.quantity} image={fashion.image} setVal={(val)=>handleTotalAmount(fashion,val)} overallQuant={overallQuant} handleOverallQuant={(val)=> handleOverallQuant(val)}/>
                        }
                        else{
                            return null;
                        }
                    })
                }
                {
                    furnitures.map((furniture)=>{
                        if (furniture.quantity>0){
                            return <CartItem key={furniture.id} label={furniture.label} price={furniture.price} quantity={furniture.quantity} image={furniture.image}  setVal={(val)=>handleTotalAmount(furniture,val)} overallQuant={overallQuant} handleOverallQuant={(val)=> handleOverallQuant(val)}/>
                        }
                        else{
                            return null;
                        }
                    })
                }
            </div>
            <div className='payment-area'>
                <div className="amount">Amount: Rs. {totalAmount}</div>
                <button className="yellow-btn">Proceed to Payment</button>
            </div>
        </div>
    );
}

export default Cart;