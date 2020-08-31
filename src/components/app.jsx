import React, {Component} from 'react';
import {connect} from 'react-redux';
import {generateArray} from './actions';
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
  // generateArray = () => {
  //   let array = [];
  //   for (let i = 0; i < 100; i++) {
  //     array.push(Math.floor(Math.random() * 100));
  //   }
  //   this.addTiles(array);
  // };

  handleClick = () => {
    this.quickSort(this.state.tiles);
  };

  render() {
    return (
      <div>
        {/* <Input updateTiles={this.addTiles} /> */}
        <TileList values={this.state.tiles} colors={this.state.colors} />
        <button onClick={this.props.onGenerateArrayPressed}>
          {'Generate'}
        </button>
        <button onClick={this.handleClick}>{'Sort'}</button>
      </div>
    );
  }

  // TESTING
  quickSort = (array) => {
    let colors = Array(array.length).fill(false);
    return this.quickSortHelper(array, 0, array.length - 1, colors);
  };

  async quickSortHelper(array, startId, endId, colors) {
    if (endId - startId < 1) {
      colors[endId] = true;
      colors[startId] = true;
      this.addColors(colors);
      this.addTiles(array);
      colors[endId] = false;
      colors[startId] = false;
      return array;
    }

    if (endId - startId === 1) {
      if (array[endId] < array[startId]) {
        await this.swap(array, startId, endId);
      }
      colors[endId] = true;
      colors[startId] = true;
      this.addColors(colors);
      this.addTiles(array);
      colors[endId] = false;
      colors[startId] = false;
      return array;
    }

    let pointer = array[startId];
    let i = startId + 1;
    let j = endId;
    while (i <= j) {
      colors[startId] = true;
      if (array[i] > pointer && array[j] <= pointer) {
        await this.swap(array, i, j);
      } else if (array[i] <= pointer) {
        colors[i] = false;
        i++;
        colors[i] = true;
        this.addColors(colors);
      } else if (array[j] > pointer) {
        colors[j] = false;
        j--;
        colors[j] = true;
        this.addColors(colors);
      }
      // this.addColors(colors);
      this.addTiles(array);
    }
    colors[startId] = false;
    colors[i] = false;
    colors[j] = false;
    this.addColors(colors);
    await this.swap(array, startId, j);
    colors[startId] = true;
    colors[j] = true;
    this.addColors(colors);
    this.addTiles(array);
    colors[startId] = false;
    colors[j] = false;
    if (j - startId < endId - j) {
      await Promise.all([
        this.quickSortHelper(array, startId, j - 1, colors),
        this.quickSortHelper(array, j + 1, endId, colors),
      ]);
    } else {
      await Promise.all([
        this.quickSortHelper(array, j + 1, endId, colors),
        this.quickSortHelper(array, startId, j - 1, colors),
      ]);
    }
    this.addTiles(array);
    return array;
  }

  async swap(array, i, j) {
    await this.sleep(0);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
const mapStateToProps = (state) => ({
  array: state.array,
});
const mapDispatchToProps = (dispatch) => ({
  onGenerateArrayPressed: () => {
    dispatch(generateArray());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
