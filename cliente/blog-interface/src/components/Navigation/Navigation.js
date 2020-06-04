import React from 'react'
import Styles from './navigation.module.css'
const Navigation =(props)=>{
    const {tabs,pageShowed,onPageChange}=props
    const renderLinks=()=>{
        const buttons =[];
        tabs.forEach((tab,pageRef) => {
            const status=pageRef===pageShowed?Styles.active:'';
            buttons.push(
                <button className={`${Styles.link} ${status}`} onClick={()=>{onPageChange(pageRef)}} key={pageRef}>
                    {tab.title}
                </button>
            )
        });
        return buttons;
    }
    return(
            <div className={Styles.page}>
                <div className={Styles.nav}>
                    {renderLinks()}
                </div>
                <div className={Styles.body}>
                    {tabs.get(pageShowed).body}
                </div>
            </div>
        )
    
}

export default Navigation
