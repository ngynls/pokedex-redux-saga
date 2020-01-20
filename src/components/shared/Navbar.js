import React, { Component } from 'react';

class NavigationBar extends Component{
    render(){
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={require('../../assets/logo.png')} alt="logo"/>
                    </a>
                </div>
            </nav>
        )
    }
}
export default NavigationBar;