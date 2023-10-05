import './MainContainer.css';
import Navbar from '../Navbar/Navbar';
import Category from '../Category/Category';
import CategoryData from '../data/CategoryData.js';
import Tray from '../Tray/Tray';
import Footer from '../Footer/Footer';
import React, {useState} from 'react';

function MainContainer() {
    const [overallQuant, setOverallQuant] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    return (
        <div className="main-container">
            <Navbar overallQuant={overallQuant} totalAmount={totalAmount} setTotalAmount={(val)=>setTotalAmount(val)} handleOverallQuant={(val)=>setOverallQuant(val)}/> 
            <div className='categories-section'>
                <h1>Categories</h1>
                <div className="categories-container">
                    {
                        CategoryData.map((category)=> {
                            return <Category key={category.id} label={category.label} image={category.image}/>
                        })
                    }
                </div>
            </div>
            <div className='trays-container'>
                <Tray overallQuant={overallQuant} handleOverallQuant={(val)=>setOverallQuant(val)} totalAmount={totalAmount} setAmt={(val)=>setTotalAmount(val)}/>
            </div>
            <Footer/>
        </div>
    )
}

export default MainContainer;