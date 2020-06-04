import React from 'react'
import Post from '../Post';
import Styles from './postContainer.module.css'

class PostContainer extends React.Component{
    state={
        postState:'loading',
        postPerPage:7,
        pageShowed:0,
        posts:[]
    }
    displayPost=()=>{
        getPost().then(data=>{
            const prevState=this.state
            this.setState({
                ...prevState,
                postState:'loaded',
                posts:data
            })
        })
        
        async function getPost(){
            let response = await fetch(`http://blog.dev.localhost/posts`);
            let data = await response.json()
            {/*ordena las post del ultimo al primero*/}
            data.sort((a,b)=>{return b.id-a.id})
            return data;
            
        }
    }

    render(){
        const postLoaded=this.state.postState!=='loading';
        const {posts}=this.state;
        //si ya cargaron los post
        if(postLoaded){
            return(
                <div className={Styles.postContainer}>
                    <h2>Lastest Post</h2> 
                    {posts.map(post=>{
                        return( <Post img={post.img} title={post.titulo} fragment={post.extracto} key={post.id}/>)
                    })}
                </div>
            )
        }else{
            return(
                
                <div className={Styles.postContainer}>
                    {/*empieza a cargar los post*/}
                    {this.displayPost()}
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