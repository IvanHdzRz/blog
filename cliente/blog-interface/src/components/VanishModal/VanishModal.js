import React from 'react'
import ReactDOM from 'react-dom'
import Styles from './modal.module.css'

class VanishModal extends React.Component{
    
    render(){
        
        const {visible} =this.props
        
        console.log(visible)
        if(visible===false){
            return null
        }
        return(
            
            ReactDOM.createPortal(
                <div className={Styles.modal}>
                    {this.props.children}
                    
                </div>
                ,
                document.getElementById('modals'))
        )
    }
}

export default VanishModal;