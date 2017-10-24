import React, { Component } from 'react';
import NewsHeader from './NewsHeader';
import NewsFooter from './NewsFooter';
import NewsContent from './NewsContent';

class NewsComponent extends Component {

    render() {
        const data = this.props.newsList;
        // Linea 11 hasta 17, me costo una banda la aca esta.
        var listItems = data.map(function (d, idx) {
            return [
                <NewsHeader title={d.title} />,
                <NewsContent content={d.content} />,
                <NewsFooter data={d} />
            ]
        })

        return (
            <div className="content">
                {listItems}
            </div>
        );
    }
}

export default NewsComponent;
