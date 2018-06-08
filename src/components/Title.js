import React, { Component } from 'react';

class Title extends Component {

    constructor(props) {
        super();
        this.props = props;
      }

    render() {
        return (
            <h1>{this.props.userName}'s Playlists</h1>
        );
    }
}

export default Title;