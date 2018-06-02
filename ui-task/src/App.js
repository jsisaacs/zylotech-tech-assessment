import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';
import { 
  Container,
  CardColumns,
  Button,
  Input,
  Label,
  FormGroup,
  Form,
  Col
 } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      urlInput: '',
      nameInput: '',
      imageCollection: [
        {
          uid: 1,
          url: 'http://images.indianexpress.com/2018/04/avengers-infinity-war-the-best-and-worst-of-iron-man-759.jpg',
          name: 'Iron Man'
        },
        {
          uid: 2,
          url: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/34/Avengers_Infinity_War_Thor_Poster.jpg/revision/latest/scale-to-width-down/324?cb=20180404205720',
          name: 'Thor'
        },
        {
          uid: 3,
          url: 'https://i.pinimg.com/736x/38/c8/17/38c81776835c4e0597c64d8dad81c256.jpg',
          name: 'Captain America'
        },
        {
          uid: 4,
          url: 'https://media1.popsugar-assets.com/files/thumbor/2zGpEunPsQjlrBlLab3dRvTRNgg/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2012/10/41/3/192/1922283/5d984387bf2ea82a_hulk/i/Hulk-From-Avengers-Age-Ultron.jpeg',
          name: 'Hulk'
        }
      ]
    };  
  }

  componentWillMount = () => {
    localStorage.getItem('images') && this.setState({
      imageCollection: JSON.parse(localStorage.getItem('images'))
    });
  }
  
  componentWillUpdate = (nextProps, nextState) => {
    localStorage.setItem('images', JSON.stringify(nextState.imageCollection));
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }

  handleUrlInputChange(event) {
    this.setState({
      urlInput: event.target.value
    });
  }

  handleNameInputChange(event) {
    this.setState({
      nameInput: event.target.value
    })
  }

  addImage(urlInput, nameInput) {
    const images = this.state.imageCollection;
    images.push({
      url: urlInput,
      name: nameInput
    });
    this.setState(images)
  }

  removeImage(uid) {
    const images = this.state.imageCollection;
    const imageIndex = images.map(image => {
      return image.uid;
    }).indexOf(uid);
    images.splice(imageIndex, 1);
    this.setState(images);
  }
  
  render() {
    let filteredImages = this.state.imageCollection.filter(
      (image) => {
        return image.name.indexOf(this.state.search) !== -1;
      }
    );
    return (
      <div className="App">
        <div id="header">
          <h1>Image Host</h1>
        </div>
        <div id="outerForm">
        <div id="innerForm">
        <div id="searchBar">
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label 
                for="searchBar"
                className="mr-sm-3"
              >
                Search
              </Label>
              <Input 
                type="text" 
                name="search" 
                id="searchBar" 
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                placeholder="Type to filter!" 
              />
            </FormGroup>
          </Form>
        </div>
        <div id="urlBar">
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label 
                for="urlBar"
                className="mr-sm-5"
              >
                Url
              </Label>
              <Input 
                type="text" 
                name="url" 
                id="urlBar" 
                value={this.state.urlInput}
                onChange={this.handleUrlInputChange.bind(this)}
                className="mr-sm-2"
                placeholder="Enter an image URL!" 
              />
              <Button
              color="primary"
              onClick={
                () => {
                  this.addImage(this.state.urlInput, this.state.nameInput);
                }
              }
            >
              Add New Image
            </Button>
            </FormGroup>
            
          </Form>
        </div>
        <div id="nameBar">
          <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label 
                  for="nameBar"
                  className="mr-sm-4"
                >
                  Name
                </Label>
                <Input 
                  type="text" 
                  name="name" 
                  id="nameBar" 
                  value={this.state.nameInput}
                  onChange={this.handleNameInputChange.bind(this)}
                  placeholder="Enter an image name!" 
                />
              </FormGroup>
            </Form>
        </div>
        </div>
        </div>
        <div id="cardView">
          <Container>
            <CardColumns>
                {filteredImages.map(image => (
                    <Image 
                      url={image.url} 
                      name={image.name} 
                      removeImage={
                        () => {
                          this.removeImage(image.uid)
                        }
                      }
                    />
                ))}
            </CardColumns>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;

// this.addImage('https://static01.nyt.com/images/2018/02/07/arts/07black-panther1/merlin_133187918_5fbcffdc-abaa-4e42-a938-24b9217b675c-superJumbo.jpg?quality=90&auto=webp', 'Black Panther');