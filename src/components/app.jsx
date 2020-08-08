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
  addTiles = (array) => {
    this.setState({tiles: array});
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Input updateTiles={this.addTiles} />
        <TileList values={this.state.tiles} />
      </div>
    );
  }
}

export default App;
