import React from 'react'
import Post from '../Post';
import Styles from './postContainer.module.css'
import Pagination from '../Pagination'
class PostContainer extends React.Component{
    state={
        postState:'loading',
        postPerPage:6,
        pageShowed:1,
        postsShowed:[],
        totalPosts:0
    }
    getPost(){
        const prevState=this.state;
        let {pageShowed,postPerPage,postsShowed,totalPosts} =prevState
        const from=postPerPage*(pageShowed-1);
        console.log(from);
        getApiPost(from,postPerPage).then(data=>{
            const {count,posts}=data;
            totalPosts=count;
            postsShowed=posts;
        
            this.setState({
                ...prevState,
                postState:'loaded',
                postsShowed,
                totalPosts,
            })

        })

        
        async function getApiPost(from,numberOfPost){
            let response = await fetch(`http://blog.dev.localhost/posts?limit=${numberOfPost}&offset=${from}`);
            let data = await response.json()
            return data;
            
        }
    }
    changePage=(newPageShowed)=>{
        const prevState=this.state
        this.setState({...prevState, pageShowed:newPageShowed,postState:'loading'})
    }
    

    render(){
        const postLoaded=this.state.postState!=='loading';
        const {posts,postPerPage,pageShowed,postsShowed,totalPosts}=this.state;
        //si ya cargaron los post
        if(postLoaded){
            return(
                <>

                <div className={Styles.postContainer}>
                    
                    <h2>Lastest Post</h2> 
                    {console.log(this.state)}
                    {postsShowed.map(post=>{
                        return(
                            <Post img={post.img} title={post.titulo} fragment={post.extracto} key={post.id} id={post.id}/>
                        )
                    })}
                </div>
                <Pagination  
                    totalPost={totalPosts} 
                    postPerPage={postPerPage}
                    pageShowed={pageShowed} 
                    onChangePage={this.changePage}
                />
                </>
            )
        }else{
            return(
                
                <div className={Styles.postContainer}>
                    {/*empieza a cargar los post*/}
                    {this.getPost()}
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