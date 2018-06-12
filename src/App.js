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
        image: "https://i.scdn.co/image/0a44b70f4fc5fb993a2efd299a73f0e24c21a775",
        durationMinutes:127,
      },
      {
        id: 2,
        name: "Top 50 #Romania",
        songs: ['Lucid Dreams', 'Taste', 'Solo'],
        image: "https://charts-images.scdn.co/REGIONAL_RO_DEFAULT.jpg",
        durationMinutes:201,
      },
      {
        id: 3,
        name: "Have A Great Day",
        songs: ['Welcome to the Party', 'Back To You', 'Start Again'],
        image: "https://i.scdn.co/image/954f97a75b44fb3e6ca974cd46eb58989f205a96",
        durationMinutes:325,
      },    
      {
        id: 4,
        name: "Wake Up Happy",
        songs: ['Rise', 'Nervous', 'Looking Back Someday'],
        image: "https://i.scdn.co/image/237dbe5ad6d3e8a60b0d79d5a6303cc531b56440",
        durationMinutes:40,
      },
      {
        id: 5,
        name: "Rock This",
        songs: ['Solara', 'The Rover', 'Blood // Water'],
        image: "https://i.scdn.co/image/e4e0c950e8015d6942795b708398d6d3c2c189c9",
        durationMinutes:64,
      },   
      {
        id: 6,
        name: "In The Shower",
        songs: ['Solara', 'The Rover', 'Blood // Water'],
        image: "https://i.scdn.co/image/3b7e8199da16b8d83cd2323a3abd8b700248aea8",
        durationMinutes:64,
      },                   
    ]
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      filterString: '',
    }
  }
  render() {
    let displayComponent = {"display": "flex", "flexDirection": "row", "flexWrap": "wrap", "justifyContent": "spaceAround", "alingContent":"center"};
    return (
      <div className="App">
       {/* we add the Component only if the name is set */}
      {
        fakeServerData.user.name &&
        <Title userName={fakeServerData.user.name}/>
      }
      
      <Filter onTextChange={text => this.setState({filterString: text})}/>

      <Summary playlistsNo={this.getPlayListsNumber()} durationHours={this.getDurationHours()}/>
        <div style={displayComponent}>
          {
            this.getPlayLists()
          }
        </div>
      </div>
    );
  }

  getPlayLists() {
      const playLists = fakeServerData.user.playlists.filter(obj => obj.name.toLocaleLowerCase().includes(this.state.filterString.toLocaleLowerCase())).map((obj) =>
        <Playlist key={obj.id} playListName={obj.name} image={obj.image} songs={obj.songs}/>
      );
      return playLists;
  }

  getPlayListsNumber() {
    return fakeServerData.user.playlists.length;
  }

  getDurationHours() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.durationMinutes;
    let playMinutes = fakeServerData.user.playlists.reduce(reducer, 0);

    let playHours = Math.round(playMinutes/60);

    return playHours;
  }  
}

export default App;
