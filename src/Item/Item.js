import './Item.css';
import React, {useState} from 'react';
import Modal from '../Modal/Modal';

function Item({image, label, price}){
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(0);
    return (
    
    <div className='item-container'>
        <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
            <div className="modal-contents">
                <h1>{label}</h1>
                <div className='modal-data-container'>
                    <div><img class="modal-img" src={image} alt={label}></img></div>
                    <div class="data-div">
                        <p>Price: {price}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. </p>
                        <button onClick={()=>setQuantity(quantity+1)}>Add to Cart</button>
                        <p>{quantity}</p>
                    </div>
                </div>
            </div>          
            
        </Modal>
        <img src={image} alt={label} onClick={()=> setIsOpen(true)}></img>
        <p>{label}</p>
        <p>Starting from {price}</p>
    </div>
    );
}

export default Item;