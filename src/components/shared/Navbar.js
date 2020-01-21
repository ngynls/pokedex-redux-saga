import React, { Component } from 'react';

class NavigationBar extends Component{
    render(){
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={require('../../assets/logo.png')} alt="logo"/>
                </a>
            </nav>
        )
    }
}
export default NavigationBar;