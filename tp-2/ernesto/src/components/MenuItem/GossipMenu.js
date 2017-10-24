import React, { Component } from 'react';

class GossipMenu extends Component {

    render() {
        const data = this.props.itemList;
        var listItems = data.map(function (d, idx) {
            return (<a key={idx} href=""><li>{d.date}</li></a>)
        })
        return (
            <div className="sub_menu">
                <div>{this.props.title}</div>
                {listItems}
            </div>
        );
    }

}

export default GossipMenu;
