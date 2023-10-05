import './Navbar.css';
import logo from '../assets/logo.png';
import React, {useState} from 'react';
import Cart from '../Cart/Cart';

function Navbar({overallQuant, totalAmount, setTotalAmount, handleOverallQuant}){
    const [isOpen, setIsOpen] = useState(false);
    

    return <div className="Navbar">
        <div className='Logo'>
            <img src={logo} alt="Logo"></img>
            <p>Flipcart</p>
        </div>
        <div className='Links'>
            <a href='#' onClick={()=>setIsOpen(true)}>Cart ({overallQuant})</a>
            <Cart open={isOpen} onClose={()=>setIsOpen(false)} totalAmount={totalAmount} setTotalAmount={(val)=>setTotalAmount(val)} overallQuant={overallQuant} handleOverallQuant={(val)=> handleOverallQuant(val)}/>
        </div>
    </div>
}

export default Navbar;