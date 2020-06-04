import React from 'react'
import Styles from './home.module.css'
import heroImg from '../../assets/hero.jpg'
const Home =()=>{
    return (
        <div className={Styles.home}>
            <div className={Styles.hero}>
                <img src={heroImg} alt='hero'/>
                <p>Welcome to my blog</p>
            </div>
            <section>
                <h2>Lastest post</h2>
            </section>
        </div>
    )
}

export default Home