import React, { Component } from 'react';
import {NavbarItems} from './NavbarItems';
import '../Navbar.css'

class Navbar extends Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }

    render(){
        return(
            <nav className="nav_items">
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <h1 className="navbar-title">NY Times Most Popular</h1>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> 
                    {NavbarItems.map((item, index) =>{
                        return(
                            <li key={index}>
                            <a className={item.cName} href={item.url}><i className={item.title}></i>
                            </a>
                            </li>
                        )
                    })}                
                </ul>
            </nav>
        )
        
    }
}

export default Navbar