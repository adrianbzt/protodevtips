import React, { Component } from 'react';

class Playlist extends Component {

    constructor(props) {
        super();
        this.props = props;
      }

    render() {
        const defaultTextColor = 'black';
        let styleComponent = {
            "width" : "1fr", 
            "height": "auto",
            "backgroundColor": "#ddd", 
            "alignContent": "spaceAround", 
            "margin": "5px", 
            "color": defaultTextColor};
        let imgComponent = {
            "width" : "214px", 
            "height": "214px",
            "borderRadius":"0px"
        };

        let songsStyle = {
            "listStyleType": "none",
            "textAlign": "left"
        }

        return(
            <div style={styleComponent}>
                <img src={this.props.image} style={imgComponent} alt={this.props.playListName}/>
                <h3> {this.props.playListName} </h3>
                <ul style={songsStyle}>
                    {this.getSongs()}
                </ul>
            </div>
        );
    }

    getSongs() {
        
        const songList = this.props.songs.map((obj) =>
            <li>{obj}</li>
        );

        return songList;
    }
}
export default Playlist;