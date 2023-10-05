import './CartItem.css';

function CartItem({label, price, quantity, image}){
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
            <button>+</button>
            <div className='quantity-number'>
                <p>{quantity}</p>
            </div>
            <button>-</button>
        </div>
    </div>
}

export default CartItem;