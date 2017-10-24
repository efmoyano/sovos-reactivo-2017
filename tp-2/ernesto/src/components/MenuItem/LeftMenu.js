import React, { Component } from 'react';
import NewsMenu from './NewsMenu';
import GossipMenu from './GossipMenu';

class LeftMenu extends Component {

    render() {

        return (
            <div className="main_nav">
                <NewsMenu itemList={this.props.alumnosList} title='Menu' />
                <GossipMenu itemList={this.props.gossipList} title='Ultimos Puterios' />
            </div>
        );
    }

}

export default LeftMenu;
