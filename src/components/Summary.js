import React, { Component } from 'react';

class Summary extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        let displayContent = { "display": "flex", "justifyContent":"space-evenly"};
        return(
            <div style={displayContent}>
                <p> {this.props.playlistsNo} playlists </p>
                <p> {this.props.durationHours} hours </p>
            </div>
        );
    }
}

export default Summary;