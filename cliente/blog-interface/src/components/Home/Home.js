import React from 'react'
import Styles from './home.module.css'
import heroImg from '../../assets/hero.jpg'
import PostContainer from '../PostContainer'
const Home =()=>{
    return (
        <div className={Styles.home}>
            <div className={Styles.hero}>
                <img src={heroImg} alt='hero' className={Styles.heroImg}/>
                <p>Welcome to my blog</p>
            </div>
            <PostContainer />
        </div>
    )
}

export default Home