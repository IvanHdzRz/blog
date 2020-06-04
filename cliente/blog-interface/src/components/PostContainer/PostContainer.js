import React from 'react'
import Post from '../Post';
import Styles from './postContainer.module.css'

class PostContainer extends React.Component{
    state={
        postState:'loading',
        postPerPage:7,
        pageShowed:0
    }

    render(){
        const postLoaded=this.state.postState!=='loading';
        //si ya cargaron los post
        if(postLoaded){
            return(
                <div className={Styles.postContainer}>
                    <h2>Lastest Post</h2>    
                </div>
            )
        }else{
            return(
                
                <div className={Styles.postContainer}>
                    <h2>Lastest Post</h2>
                    <Post  status='loading'/>
                    <Post  status='loading'/>
                    <Post  status='loading'/>
                </div>
            )
        }
    }
}

export default PostContainer