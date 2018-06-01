import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageCollection: [
        {
          url: 'http://images.indianexpress.com/2018/04/avengers-infinity-war-the-best-and-worst-of-iron-man-759.jpg',
          name: 'Iron Man'
        },
        {
          url: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/34/Avengers_Infinity_War_Thor_Poster.jpg/revision/latest/scale-to-width-down/324?cb=20180404205720',
          name: 'Thor'
        }
      ]
    };
  }



  render() {
    return (
      <div className="App">
        {this.state.imageCollection.map(image => (
          //<img src={image.url} alt={image.name} />
           <Image url={image.url} name={image.name} />
        ))}
      </div>
    );
  }
}

export default App;
