import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Summary from './components/Summary'
import Playlist from './components/Playlist'
import Filter from './components/Filter';

let fakeServerData = {
  user: {
    name: 'Adrian'
  }
}
class App extends Component {
  render() {
    let displayComponent = {"display": "flex", "flexDirection": "row", "flexWrap": "wrap", "justifyContent": "spaceAround", "alingContent":"center"};
    return (
      <div className="App">
      <Title userName={fakeServerData.user.name}/>
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
