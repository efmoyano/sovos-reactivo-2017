import React, { Component } from 'react';

class NewsMenu extends Component {

    render() {
        const data = this.props.itemList;
        var listItems = data.map(function (d, idx) {
            return (<a key={idx} href="#">Ver Noticias de <b>{d.name}</b></a>)
        })
        return (
            <div className="sub_menu">
                <div>{this.props.title}</div>
                {listItems}
            </div>
        );
    }

}

export default NewsMenu;
