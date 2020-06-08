import React from 'react'
import Styles from './addPostSection.module.css'
import Modal from '../Modal'
import VanishModal from '../VanishModal'
import imgSuccess from '../../assets/tick.png'
import imgError from '../../assets/close.png'
class AddPostSection extends React.Component{
   
    state={
        PostStatus:'none'
    }
    title=React.createRef()
    extract=React.createRef()
    body=React.createRef()
    img=React.createRef()
    showLoading=()=>{
        this.setState({PostStatus:'loading'})
        
    }
    resetStatusPost=()=>{
        setTimeout(()=>{
            this.setState({PostStatus:'none'})
        },2000)
    }
    showSuccess=()=>{
        this.title.current.value='';
        this.extract.current.value='';
        this.body.current.value='';
        this.img.current.value='';

        this.setState({PostStatus:'success'})
    }
    showError=()=>{
        this.setState({PostStatus:'failed'})
    }
    SendData=(e)=>{
       this.showLoading();
        const data={
        titulo :this.title.current.value ,
        extracto : this.extract.current.value, 
        cuerpo :this.body.current.value ,
        img :this.img.current.value 
       }

        var formdata = new FormData();
        formdata.append("titulo", data.titulo);
        formdata.append("extracto", data.extracto);
        formdata.append("cuerpo", data.cuerpo);
        formdata.append("img", data.img);
        console.log(formdata);
        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
       };
       let _this=this;
        fetch("http://blog.dev.localhost/posts", requestOptions)
            .then(response => response.text())
            .then(result => {_this.showSuccess(); _this.resetStatusPost();})
            .catch(error => {_this.showError(); _this.resetStatusPost()});                        
        
        e.preventDefault() 
        
   }
   render(){
        const {PostStatus}=this.state
        const visibleExito=PostStatus==='success'? true:false;
        const visibleError=PostStatus==='failed'?true:false;
        const visibleLoad=PostStatus==='loading'?true:false;
        return(
            <div className={Styles.addPostSection}>
                <form onSubmit={this.SendData}>
                    <h2>Escribe  un nuevo post</h2>
                    <label htmlFor='txtTitle' className={Styles.lblTitle}> Titulo del post</label>
                    <input  type='text' required id='txtTitle' className={Styles.inputTitle} ref={this.title}/>
                    
                    <label htmlFor='txtExtract' className={Styles.lblExtract}>Describe de que se tratara el post (max 255 caracteres)</label>
                    <input type='text' required id='txtExtract'  className={Styles.inputExtract} ref={this.extract}/>
                    
                    <label htmlFor='txtBody' className={Styles.lblBody}>Cuerpo</label>
                    <input type='text' required id='txtBody'  className={Styles.inputBody} multiple ref={this.body}/>

                    <label htmlFor='txtImg' className={Styles.lblImg}>Imagen del post</label>
                    <input type='url' required id='txtImg'  className={Styles.inputImg} ref={this.img}/>
                    
                    <input type='submit'  value='Subir post' className={Styles.btnSend}/>
                </form>
                {console.log('mostrat modal?',visibleExito)}
                <VanishModal visible={visibleExito}>
                    <h3 style={{color:'green',textAlign:'center'}}>post agregado</h3>
                    <img src={imgSuccess} alt='exito al agregar el post' style={{width:'200px',height:'200px'}}/>
                </VanishModal>
                <VanishModal visible={visibleError}>
                    <h3 style={{color:'red',textAlign:'center'}}>algo salio mal</h3>
                    <p style={{color:'red',textAlign:'center'}}>Intentalo mas tarde</p>
                    <img src={imgError} alt='fallo' style={{width:'200px',height:'200px'}}/>
                </VanishModal>
                <Modal visible={visibleLoad}>
                    <h3>Subiendo post...</h3>
                </Modal>
            </div>
        )
    }
}

export default AddPostSection