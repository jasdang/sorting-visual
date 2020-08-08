import React, {Component} from 'react';
import Input from './input';
import Tile from './tile';
class App extends Component {
  render() {
    return (
      <div>
        <Input />
        <Tile />
      </div>
    );
  }
}

export default App;
