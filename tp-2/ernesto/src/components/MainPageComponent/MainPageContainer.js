import React, { Component } from 'react';
import MainHeader from './MainHeader';
import MainMenu from './MainMenu';

class MainPageContainer extends Component {


    render() {

        return (

            <div>
                <MainHeader />

                <MainMenu />
            </div>

        );
    }

}

export default MainPageContainer;
