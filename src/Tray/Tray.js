import './Tray.css';
import Item from '../Item/Item';


function Tray({category,object, overallQuant, handleOverallQuant, totalAmount, setAmt}){
    

    const handleTotalAmount = (obj,val) => {
        var oldAmount = obj.price*obj.quantity;
        var newAmount = obj.price*val;
        var netChange = totalAmount - oldAmount + newAmount;
        setAmt(netChange);
        obj.quantity = val;
    }

    return (
    <div className='tray-container'>
        <h1>Best of {category}</h1>
        <div className="tray-items">
            {
                
                object.map((obj)=>{
                    return <Item key={obj.id} label={obj.label} image={obj.image} price={obj.price} quantity={obj.quantity} setVal={(val)=>handleTotalAmount(obj,val)} overallQuant={overallQuant} handleOverallQuant={(val)=> handleOverallQuant(val)}/>
                })
            }
        </div>
    </div>);
}

export default Tray;