import React, {Component} from 'react';
import Input from './input';
import TileList from './tile_list';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
    };
  }
  render() {
    return (
      <div>
        <Input />
        <TileList values={this.state.tiles} />
      </div>
    );
  }
}

export default App;
