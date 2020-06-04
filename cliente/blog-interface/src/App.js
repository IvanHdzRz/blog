import React from 'react';
import Styles from './App.module.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
class App extends React.Component{
  state={
    pageShowed:'index'
  }
  
  changePage=(page)=>{
    this.setState({pageShowed:page})
    
  }

  render(){
    const {pageShowed}=this.state
    {/*objeto que guarda el titulo y el cuerpo de cada seccion de la pagina*/}
    const tabs=new Map();
    tabs.set('index',{title:'home',body: <Home/>})
    tabs.set('agregar',{title:'agregar post',body:<div><h1>Soy agregar</h1></div>})
    return (
      <div className={Styles.app}>
        <Navigation
          pageShowed={pageShowed}
          tabs={tabs}
          onPageChange={this.changePage}    
        />
      </div>
    );
  }
}

export default App;
