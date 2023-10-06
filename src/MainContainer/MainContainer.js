import './MainContainer.css';
import Navbar from '../Navbar/Navbar';
import Category from '../Category/Category';
import CategoryData from '../data/CategoryData.js';
import Tray from '../Tray/Tray';
import Footer from '../Footer/Footer';
import React, {useState, createContext} from 'react';

export const MainContext = createContext();

function MainContainer() {
    const [overallQuant, setOverallQuant] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [w, setW] = useState(0);
    const [y, setY] = useState(0);
    const word = "Hello";
    return (
        <div className="main-container">
            <MainContext.Provider value={{overallQuant, setOverallQuant,totalAmount,setTotalAmount}}>
            <Navbar/>
            </MainContext.Provider> 
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
                <MainContext.Provider value={{overallQuant, setOverallQuant,totalAmount,setTotalAmount}}>
                    <Tray/>
                </MainContext.Provider>
            </div>
            <Footer/>
        </div>
    )
}

export default MainContainer;