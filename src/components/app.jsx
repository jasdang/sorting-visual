import React, {Component} from 'react';
import TileList from './tile_list';
import Bar from './bar';
import regeneratorRuntime from 'regenerator-runtime';
// import quickSort from './sorting_algorithms';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
      colors: [],
    };
  }
  addTiles = (array) => {
    this.setState({tiles: array});
  };
  addColors = (array) => {
    this.setState({colors: array});
  };
  generateArray = () => {
    let array = [];
    for (let i = 0; i < 100; i++) {
      array.push(Math.floor(Math.random() * 100));
    }
    this.addTiles(array);
  };

  handleClick = () => {
    this.quickSort(this.state.tiles);
  };

  render() {
    return (
      <div>
        {/* <Input updateTiles={this.addTiles} /> */}
        <TileList values={this.state.tiles} colors={this.state.colors} />
        <button onClick={this.generateArray}>{'Generate'}</button>
        <button onClick={this.handleClick}>{'Sort'}</button>
      </div>
    );
  }

  // TESTING
  quickSort = (array) => {
    return this.quickSortHelper(array, 0, array.length - 1);
  };

  async quickSortHelper(array, startId, endId) {
    if (endId - startId < 1) {
      this.addTiles(array);
      return array;
    }

    if (endId - startId === 1) {
      if (array[endId] < array[startId]) {
        await this.swap(array, startId, endId);
      }
      this.addTiles(array);
      return array;
    }

    let pointer = array[startId];
    let i = startId + 1;
    let j = endId;
    while (i <= j) {
      if (array[i] > pointer && array[j] <= pointer) {
        await this.swap(array, i, j);
      } else if (array[i] <= pointer) {
        i++;
      } else if (array[j] > pointer) {
        j--;
      }
      this.addTiles(array);
    }
    await this.swap(array, startId, j);
    this.addTiles(array);
    if (j - startId < endId - j) {
      await Promise.all([
        this.quickSortHelper(array, startId, j - 1),
        this.quickSortHelper(array, j + 1, endId),
      ]);
    } else {
      await Promise.all([
        this.quickSortHelper(array, j + 1, endId),
        this.quickSortHelper(array, startId, j - 1),
      ]);
    }
    this.addTiles(array);
    return array;
  }

  async swap(array, i, j) {
    await this.sleep(5);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default App;
