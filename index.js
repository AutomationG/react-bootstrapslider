import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      value: 0
    }
  }

  render() {
    return (
      <div>
       <RangeSlider  value ={this.state.value} onChange={(event) => this.setState({value:event.target.value})}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
