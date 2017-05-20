import React from 'react';
import logo from '../images/logo.svg';

export default class Header extends React.Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>ReactNow</h2>
                <p className="App-intro"></p>
            </div>
        );
    }
}
