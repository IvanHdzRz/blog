import React from 'react'
import loadingIco from '../../assets/refresh.png'
import Styles from './Post.module.css'
const Post=(props)=>{
    const {status}=props;
    {/*si aun no a cargado la info del api muestra que esta cargando*/}
    if (status==='loading'){
        return(
            <div className={Styles.loading}>
                <img src={loadingIco} alt='laoding' className='imgpost'/>
                <div className={Styles.textLoading}>

                </div>
            </div>
        )
    }
    return(
        <div className={Styles.post} >
            <img  src={props.img}/>
            <h3 className={Styles.title}>{props.title}</h3>
            <p className={Styles.fragment}>
                {props.fragment}
            </p>
        </div>
    )
}

export default Post;