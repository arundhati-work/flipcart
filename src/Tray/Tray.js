import './Tray.css';
import Item from '../Item/Item';


function Tray({category,object, overallQuant, handleOverallQuant}){
    return (
    <div className='tray-container'>
        <h1>Best of {category}</h1>
        <div className="tray-items">
            {
                object.map((obj)=>{
                    return <Item key={obj.id} label={obj.label} image={obj.image} price={obj.price} quantity={obj.quantity} setVal={(val)=>obj.quantity = val} overallQuant={overallQuant} handleOverallQuant={(val)=> handleOverallQuant(val)}/>
                })
            }
        </div>
    </div>);
}

export default Tray;