import React, { Component } from 'react';
import LeftMenu from './components/MenuItem/LeftMenu';
import NewsComponent from './components/NewsComponent/NewsComponent';
import MainPageContainer from './components/MainPageComponent/MainPageContainer';
import styles from '../styles/style.scss';

class App extends Component {

  render() {
    let alumnosList = [
      { name: 'peter' },
      { name: 'mocho' },
      { name: 'ernesto' },
      { name: 'perro' },
      { name: 'ivan' },
      { name: 'facu' },
      { name: 'euge' },
      { name: 'tincho' },
      { name: 'mariasol' }
    ];

    let gossipList = [
      { date: 'Octubre 19, 2017' },
      { date: 'Octubre 18, 2017' },
      { date: 'Octubre 17, 2017' }
    ];

    let newsList = [
      {
        title: 'Porque MariaSol no usa un editor como la gente',
        content: 'Los compas del curso se preguntan que pasa con el editor...',
        date: 'Octubre 18, 2017',
        owner: 'usuario anonimo1',
        commentsCount: 0
      },
      {
        title: 'Comentarios sobre el profe JPG',
        content: 'Muchos alumnos se llegaron por SRN para elogiar al profesor...',
        date: 'Octubre 18, 2017',
        owner: 'usuario anonimo2',
        commentsCount: 10
      },
      {
        title: 'Que paso en el After-Rafting',
        content: 'Algunos alumnos del curso se quedaron en salta luego del ...',
        date: 'Octubre 15, 2017',
        owner: 'usuario anonimo3',
        commentsCount: 300
      }
    ];
    return (

      <div className="container">

        <MainPageContainer>

        </MainPageContainer>


        <LeftMenu alumnosList={alumnosList} gossipList={gossipList} />

        <NewsComponent newsList={newsList} />
      </div >
    );
  }
}
export default App;
