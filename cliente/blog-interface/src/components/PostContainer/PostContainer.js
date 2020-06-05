import React from 'react'
import Post from '../Post';
import Styles from './postContainer.module.css'
import Pagination from '../Pagination'
class PostContainer extends React.Component{
    state={
        postState:'loading',
        postPerPage:6,
        pageShowed:1,
        posts:[],
        postShowed:[]
    }
    componentDidMount(){
        getApiPost().then(data=>{
            
            const prevState=this.state
            const mostRecent=0+(prevState.postPerPage*(prevState.pageShowed-1));
            const lessrecent = (mostRecent+6>=data.length)?data.length-1:mostRecent+6;
            const postInpage=data.slice(mostRecent,lessrecent);
            console.log(mostRecent,lessrecent)
            console.log(postInpage)
            
            this.setState({
                ...prevState,
                postState:'loaded',
                postShowed:postInpage,
                posts:data,
                totalPost:data.length
            })

        })
        
        async function getApiPost(){
            let response = await fetch(`http://blog.dev.localhost/posts`);
            let data = await response.json()
            {/*ordena las post del ultimo al primero*/}
            data.sort((a,b)=>{return b.id-a.id})
            return data;
            
        }
    }
    changePage=(newPageShowed)=>{
        
        const prevState=this.state;
        const mostRecent=0+(prevState.postPerPage*(prevState.pageShowed-1));
        const lessrecent = (mostRecent+6>=prevState.posts.length)?prevState.posts.length-1:mostRecent+6;
        const postInpage=prevState.posts.slice(mostRecent,lessrecent);
        this.setState({...prevState,pageShowed:newPageShowed,postShowed:postInpage})
    }
    

    render(){
        const postLoaded=this.state.postState!=='loading';
        const {posts,postPerPage,pageShowed,postShowed}=this.state;
        //si ya cargaron los post
        if(postLoaded){
            return(
                <>
                <div className={Styles.postContainer}>
                    <h2>Lastest Post</h2> 
                    {postShowed.map(post=>{
                        return(
                            <Post img={post.img} title={post.titulo} fragment={post.extracto} key={post.id} id={post.id}/>
                        )
                    })}
                </div>
                <Pagination  
                    totalPost={posts.length} 
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