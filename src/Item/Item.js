import './Item.css';
import React, {useState} from 'react';
import Modal from '../Modal/Modal';

function Item({image, label, price}){
    const [isOpen, setIsOpen] = useState(false);
    return (<div className='item-container'>
        <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
            <div className="modal-contents">
                <h1>{label}</h1>
                <div className='modal-data-container'>
                    <div><img src={image} alt={label}></img></div>
                    <div class="data-div">
                        <p>Price: {price}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button>Add to Cart</button>
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