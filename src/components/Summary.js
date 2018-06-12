import React, { Component } from 'react';

class Summary extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('test')
        }, 5000);
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