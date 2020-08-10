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
  generateArray = () => {
    let array = [];
    for (let i = 0; i < 20; i++) {
      array.push(Math.floor(Math.random() * 21));
    }
    this.addTiles(array);
  };

  handleClick = () => {
    this.addTiles(quickSort(this.state.tiles));

    console.log(typeof this.state.tiles[0]);
  };

  render() {
    return (
      <div>
        <Input updateTiles={this.addTiles} />
        <TileList values={this.state.tiles} />
        <button onClick={this.generateArray}>{'Generate'}</button>
        <button onClick={this.handleClick}>{'Sort'}</button>
      </div>
    );
  }
}

export default App;
