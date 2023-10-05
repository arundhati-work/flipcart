import './Navbar.css';
import logo from '../assets/logo.png';
import React, {useState} from 'react';
import Cart from '../Cart/Cart';

function Navbar({overallQuant}){
    const [isOpen, setIsOpen] = useState(false);

    return <div className="Navbar">
        <div className='Logo'>
            <img src={logo} alt="Logo"></img>
            <p>Flipcart</p>
        </div>
        <div className='Links'>
            <a href='#' onClick={()=>setIsOpen(true)}>Cart ({overallQuant})</a>
            <Cart open={isOpen} onClose={()=>setIsOpen(false)}/>
        </div>
    </div>
}

export default Navbar;