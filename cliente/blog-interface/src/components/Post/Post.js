import React from 'react'
import loadingImg from '../../assets/grayLoading.jpg'
import Styles from './Post.module.css'
import loadIco from '../../assets/loadIco.png'
const Post=(props)=>{
    const {status}=props;
    {/*si aun no a cargado la info del api muestra que esta cargando*/}
    if (status==='loading'){
        return(
            <div className={Styles.post}>
                <img src={loadingImg} alt='laoding' className={Styles.imgPost}/>
                <img  src={loadIco} alt='spinArrow' className={Styles.loadIco}/>
                    <div className={Styles.pseudoTitle}></div>
                    <div className={Styles.pseudoText}></div>
                
            </div>
        )
    }
    return(
        <div className={Styles.post} >
            <img  src={props.img} className={Styles.imgPost}/>
            <h3 className={Styles.title}>{props.title}</h3>
            
            <p className={Styles.fragment}>
                {props.fragment}
            </p>
        </div>
    )
}

export default Post;