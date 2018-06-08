import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Summary from './components/Summary'
import Playlist from './components/Playlist'
import Filter from './components/Filter';

let fakeServerData = {
  user: {
    name: 'Adrian',
    playlists: [
      {
        id: 1,
        name: "Feeling Good Friday",
        songs: ['Fake Love', 'Canelloni Makaroni', 'New Light'],
        image: "https://i.scdn.co/image/0a44b70f4fc5fb993a2efd299a73f0e24c21a775"
      },
      {
        id: 2,
        name: "Top 50 #Romania",
        songs: ['Lucid Dreams', 'Taste', 'Solo'],
        image: "https://charts-images.scdn.co/REGIONAL_RO_DEFAULT.jpg"
      },
      {
        id: 3,
        name: "Have A Great Day",
        songs: ['Welcome to the Party', 'Back To You', 'Start Again'],
        image: "https://i.scdn.co/image/954f97a75b44fb3e6ca974cd46eb58989f205a96"
      },    
      {
        id: 4,
        name: "Wake Up Happy",
        songs: ['Rise', 'Nervous', 'Looking Back Someday'],
        image: "https://i.scdn.co/image/237dbe5ad6d3e8a60b0d79d5a6303cc531b56440"
      },
      {
        id: 5,
        name: "Rock This",
        songs: ['Solara', 'The Rover', 'Blood // Water'],
        image: "https://i.scdn.co/image/e4e0c950e8015d6942795b708398d6d3c2c189c9"
      },                
    ]
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

          {
            this.getPlayLists()
          }
        </div>
      </div>
    );
  }

  getPlayLists() {
      const playLists = fakeServerData.user.playlists.map((obj) =>
        <Playlist key={obj.id} playListName={obj.name} image={obj.image} songs={obj.songs}/>
      );
      return playLists;
  }
}

export default App;
