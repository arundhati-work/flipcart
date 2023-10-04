import './Item.css';

function Item({image, label, price}){
    <div className='item-container'>
        <img src={image} alt={label}></img>
        <p>{label}</p>
        <p>Starting from {price}</p>
    </div>
}

export default Item;