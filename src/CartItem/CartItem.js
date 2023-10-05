import './CartItem.css';
import React, {useState} from 'react';

function CartItem({label, price, quantity, image, setVal, overallQuant, handleOverallQuant}){
    const [q, setQ] = useState(quantity);

    const addQHandler = () => {
        setQ(q+1);
        setVal(q+1);
        handleOverallQuant(overallQuant+1);
    }

    const subQHandler = () => {
        setQ(q-1);
        setVal(q-1);
        handleOverallQuant(overallQuant-1);
    }

    const finalPrice = quantity*price;
    return <div className="cart-item-container">
        <div className='cart-item-image'>
            <img src={image} alt={label}></img>
        </div>
        <div className='cart-item-text'>
            <p>{label}</p>
            <p>Rs. {finalPrice}</p>
        </div>
        <div className='cart-item-quantity'>
            <button onClick={addQHandler}>+</button>
            <div className='quantity-number'>
                <p>{q}</p>
            </div>
            <button onClick={subQHandler}>-</button>
        </div>
    </div>
}

export default CartItem;