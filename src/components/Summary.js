import React, { Component } from 'react';

class Summary extends Component {

    

    render() {
        let displayContent = { "display": "flex", "justifyContent":"space-evenly"};
        return(
            <div style={displayContent}>
                <p> 5 playlists </p>
                <p> 465 hours </p>
            </div>
        );
    }
}

export default Summary;