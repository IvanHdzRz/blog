import React from 'react'
import Styles from './addPostSection.module.css'
const AddPostSection =()=>{
   
    const title=React.createRef()
    const extract=React.createRef()
    const body=React.createRef()
    const img=React.createRef()
   const SendData=(e)=>{
       const data={
        titulo :title.current.value ,
        extracto : extract.current.value, 
        cuerpo :body.current.value ,
        img :img.current.value 
       }
       console.log(data);
       SendToApi(data);
       e.preventDefault()
       async function SendToApi(data){
            const response= await fetch('http://blog.dev.localhost/posts', {
                                    method: 'POST', 
                                    mode: 'cors', 
                                    cache: 'no-cache', 
                                    credentials: 'same-origin', // include, *same-origin, omit
                                    headers: {
                                    'Content-Type': 'application/json'
                                    
                                    },
                                    redirect: 'follow',
                                    referrerPolicy: 'no-referrer', 
                                    body:data
                                });
            console.log(response);                        
        }
        
   }
    return(
        <div className={Styles.addPostSection}>
            <form onSubmit={SendData}>
                <h2>Escribe  un nuevo post</h2>
                <label htmlFor='txtTitle' className={Styles.lblTitle}> Titulo del post</label>
                <input  type='text' required id='txtTitle' className={Styles.inputTitle} ref={title}/>
                
                <label htmlFor='txtExtract' className={Styles.lblExtract}>Describe de que se tratara el post (max 255 caracteres)</label>
                <input type='text' required id='txtExtract'  className={Styles.inputExtract} ref={extract}/>
                
                <label htmlFor='txtBody' className={Styles.lblBody}>Cuerpo</label>
                <input type='text' required id='txtBody'  className={Styles.inputBody} multiple ref={body}/>

                <label htmlFor='txtImg' className={Styles.lblImg}>Imagen del post</label>
                <input type='url' required id='txtImg'  className={Styles.inputImg} ref={img}/>
                
                <input type='submit'  value='Subir post' className={Styles.btnSend}/>
            </form>
        </div>
    )
}

export default AddPostSection