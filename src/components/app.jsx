import React, {Component} from 'react';
import Input from './input';
import TileList from './tile_list';
import quickSort from './sorting_algorithms';
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

  handleClick = () => {
    this.addTiles([4, 5, 6]);
  };

  render() {
    return (
      <div>
        <Input updateTiles={this.addTiles} />
        <TileList values={this.state.tiles} />
        <button onClick={this.handleClick}>{'Sort'}</button>
      </div>
    );
  }
}

export default App;
