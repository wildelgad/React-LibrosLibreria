import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      books:[
        {id:0, rating: 4, title: 'Harry Potter y el Cáliz de fuego', image: 'libro01.jpg'},
        {id:1, rating: 3, title: 'The shining', image: 'libro02.jpg'},
        {id:2, rating: 5, title: 'Código da Vinci', image: 'libro03.jpg'},
        {id:3, rating: 5, title: 'El Principito', image: 'libro04.jpg'},
        {id:4, rating: 5, title: 'Sobrenatural', image: 'libro05.jpg'}
      ]
    };
  }

  render(){
    return (
      <div className="App">
        <h1>Hey Jupiter</h1>
        <Menu title="Amozon" />
        <List items={this.state.books} />
      </div>
    );
  }
}

export default App;
