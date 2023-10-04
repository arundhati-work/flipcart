import './Modal.css';

function Modal({open, children, onClose}){
    if (!open) return null;
    return <div className='modal-container'>
        <button className='close-btn' onClick={onClose}>x</button>
        {children}
    </div>
}

export default Modal;