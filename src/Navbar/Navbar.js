import './Navbar.css';
import logo from '../assets/logo.png'

function Navbar(){
    return <div className="Navbar">
        <div className='Logo'>
            <img src={logo} alt="Logo"></img>
            <p>Flipcart</p>
        </div>
        <div className='Links'>
            <a href='#'>Become a seller</a>
            <a href='#'>New User?</a>
            <a href='#'>Cart (0)</a>
        </div>
    </div>
}

export default Navbar;