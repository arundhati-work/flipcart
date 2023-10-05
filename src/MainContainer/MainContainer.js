import './MainContainer.css';
import Navbar from '../Navbar/Navbar';
import Category from '../Category/Category';
import CategoryData from '../data/CategoryData.js';
import electronics from '../data/ElectronicsData';
import fashion from '../data/FashionData';
import furnitures from '../data/FurnitureData';
import Tray from '../Tray/Tray';
import Footer from '../Footer/Footer';
import React, {useState} from 'react';

function MainContainer() {
    const [overallQuant, setOverallQuant] = useState(0);
    return (
        <div className="main-container">
            <Navbar overallQuant={overallQuant}/> 
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
                <Tray category="Electronics" object={electronics} overallQuant={overallQuant} handleOverallQuant={(val)=>setOverallQuant(val)}/>
                <Tray category="Fashion" object={fashion} handleOverallQuant={(val)=>setOverallQuant(val)}/>
                <Tray category="Furniture" object={furnitures} handleOverallQuant={(val)=>setOverallQuant(val)}/>
            </div>
            <Footer/>
        </div>
    )
}

export default MainContainer;