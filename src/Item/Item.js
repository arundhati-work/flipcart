import './Item.css';
import React, {useState} from 'react';
import Modal from '../Modal/Modal';

function Item({image, label, price, quantity, setVal, overallQuant, handleOverallQuant }){
    const [isOpen, setIsOpen] = useState(false);
    const [q, setQ] = useState(quantity);

    const addQHandler = () => {
        setQ(q+1);
        setVal(q+1);
        handleOverallQuant(overallQuant+1);
    }

    return (
    
    <div className='item-container'>
        <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
            <div className="modal-contents">
                <h1>{label}</h1>
                <div className='modal-data-container'>
                    <div><img className="modal-img" src={image} alt={label}></img></div>
                    <div className="data-div">
                        <p>Price: {price}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. </p>
                        <div className="cart-activity">
                            <button className="yellow-btn" onClick={addQHandler}>Add to Cart</button>
                            <div><p>{q}</p></div>
                        </div>
                        
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