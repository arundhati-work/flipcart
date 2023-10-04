import './MainContainer.css';
import Navbar from '../Navbar/Navbar';
import Category from '../Category/Category';
import CategoryData from '../data/CategoryData.js';
import electronics from '../data/ElectronicsData';
import Tray from '../Tray/Tray';

function MainContainer() {
    return (
        <div className="main-container">
            <Navbar/>
            <div className="categories-container">
                {
                    CategoryData.map((category)=> {
                        return <Category key={category.id} label={category.label} image={category.image}/>
                    })
                }
            </div>
            <div className='trays-container'>
                {/* <Tray category="Electronics" object={electronics}/>
                <Tray category="Electronics" object={electronics}/>
                <Tray category="Electronics" object={electronics}/> */}
                <p>Trays Container</p>
                <Tray/>
            </div>
        </div>
    )
}

export default MainContainer;