import './Category.css';

function Category({label, image}){
    return <div className="category">
        <img src={image} alt="Category"></img>
        <p>{label}</p>
    </div>
}

export default Category;