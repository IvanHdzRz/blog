import React from 'react'
import Styles from './addPostSection.module.css'
const AddPostSection =()=>{
    return(
        <div className={Styles.addPostSection}>
            <form>
                <h2>Escribe  un nuevo post</h2>
                <label htmlFor='txtTitle' className={Styles.lblTitle}> Titulo del post</label>
                <input  type='text' required id='txtTitle' className={Styles.inputTitle}/>
                
                <label htmlFor='txtExtract' className={Styles.lblExtract}>Describe de que se tratara el post (max 255 caracteres)</label>
                <input type='text' required id='txtExtract'  className={Styles.inputExtract}/>
                
                <label htmlFor='txtBody' className={Styles.lblBody}>Cuerpo</label>
                <input type='text' required id='txtBody'  className={Styles.inputBody} multiple/>

                <label htmlFor='txtImg' className={Styles.lblImg}>Imagen del post</label>
                <input type='url' required id='txtImg'  className={Styles.inputImg}/>
                
                <input type='submit'  value='Subir post' className={Styles.btnSend}/>
            </form>
        </div>
    )
}

export default AddPostSection