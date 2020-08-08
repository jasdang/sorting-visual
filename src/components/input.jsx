import React, {Component} from 'react';

class Input extends Component {
  handleSubmit = () => {
    console.log('hi');
  };

  render() {
    return (
      <div>
        <form action='#' onSubmit={this.handleSubmit}>
          <input type='text' />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default Input;
