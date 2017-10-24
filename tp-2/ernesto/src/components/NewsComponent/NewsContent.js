import React, { Component } from 'react';
import NewsHeader from './NewsHeader';
import NewsFooter from './NewsFooter';

class NewsContent extends Component {

    render() {

        return (
            <p>{this.props.content}</p>
        );
    }
}

export default NewsContent;
