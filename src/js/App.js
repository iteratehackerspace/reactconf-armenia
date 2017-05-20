import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import SpeakersBoard from './SpeakersBoard';

class App extends Component {
  render() {
    return(
        <div className="App">
            <Header/>
            <SpeakersBoard/>
        </div>
    );
  }
}

export default App;
