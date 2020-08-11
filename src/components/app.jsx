import React, {Component} from 'react';
import Input from './input';
import TileList from './tile_list';
import Bar from './bar';
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
  };
  generateArray = () => {
    let array = [];
    for (let i = 0; i < 20; i++) {
      array.push(Math.floor(Math.random() * 100));
    }
    this.addTiles(array);
    console.log(array);
  };

  handleClick = () => {
    this.addTiles(quickSort(this.state.tiles));
  };

  render() {
    return (
      <div className='container'>
        {/* <Input updateTiles={this.addTiles} /> */}
        <TileList values={this.state.tiles} />
        <button onClick={this.generateArray}>{'Generate'}</button>
        <button onClick={this.handleClick}>{'Sort'}</button>
      </div>
    );
  }
}

export default App;
