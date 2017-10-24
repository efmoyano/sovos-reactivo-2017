import React, { Component } from 'react';

class NewsHeader extends Component {

    render() {

        return (
            <h1>{this.props.title}</h1>
        );
    }

}

export default NewsHeader;
