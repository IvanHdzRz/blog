import React from 'react'
import ReactDOM from 'react-dom'
import Styles from './modal.module.css'

const Modal = (props)=>{
    if(props.visible===false){
        return null
    }
    return(
        
        ReactDOM.createPortal(
            <div className={Styles.modal}>
                {props.children}
            </div>
            ,
            document.getElementById('modals'))
    )
}

export default Modal;