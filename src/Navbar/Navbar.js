import './Navbar.css';
import logo from '../assets/logo.png'

function Navbar(){
    return <div className="Navbar">
        <img src={logo} alt="Logo"></img>
        <p>Flipcart</p>
    </div>
}

export default Navbar;