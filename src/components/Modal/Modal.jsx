import './Modal.scss';
const Modal = ({children,...props}) => {
    const {
        className
    } = props;
    return (
        <div className={'ModalWrapper'}>
            <div className={`ModalWrapper__modal ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Modal;