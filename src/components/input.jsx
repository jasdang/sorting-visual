import React, {Component} from 'react';

class Input extends Component {
  handleSubmit = (event) => {
    let array = document
      .getElementById('input')
      .value.split(',')
      .map((v) => {
        return parseInt(v);
      });
    console.log(array);
  };

  render() {
    return (
      <div>
        <form action='#' onSubmit={this.handleSubmit}>
          <input type='text' id='input' />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default Input;
