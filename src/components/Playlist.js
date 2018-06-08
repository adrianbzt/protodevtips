import React, { Component } from 'react';

class Playlist extends Component {

    constructor(props) {
        super();
        this.props = props;
      }

    render() {
        const defaultTextColor = '#fff';
        let styleComponent = {"width" : "1fr", "height": "auto", "backgroundColor": "#ddd", "alignContent": "spaceAround", "margin": "5px", "color": defaultTextColor};
        let imgComponent = {"width" : "214px", "height": "214px", "borderRadius":"100px"};

        return(
            <div style={styleComponent}>
                <img src="https://i.scdn.co/image/3b7e8199da16b8d83cd2323a3abd8b700248aea8" style={imgComponent} alt="ce smart e, nu pot folosi same text"/>
                <h3> {this.props.playListName} </h3>
                <ul>
                    <li> Song 01</li>
                    <li> Song 02</li>
                    <li> Song 03</li>
                </ul>
            </div>
        );
    }
}
export default Playlist;