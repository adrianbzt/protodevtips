import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Summary from './components/Summary'
import Playlist from './components/Playlist'
import Filter from './components/Filter';

class App extends Component {
  render() {
    let displayComponent = {"display": "flex", "flexDirection": "row", "flexWrap": "wrap", "justifyContent": "spaceAround"};
    return (
      <div className="App">
      <Title/>
      <Filter/>
      <Summary/>

        <div style={displayComponent}>
          <Playlist playListName="Playlist 01"/>
          <Playlist playListName="Playlist 02"/>
          <Playlist playListName="Playlist 03"/>
          <Playlist playListName="Playlist 04"/>
          <Playlist playListName="Playlist 05"/>
          
        </div>
      </div>
    );
  }
}

export default App;
