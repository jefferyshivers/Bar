import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Bar from '../../src/Bar';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBar: 1,
      userRangeInput: 50
    }
  }

  updateValue(id, value) {
    this.setState({
      [id]: value
    })
  }

  render() {
    const barStyles = [
      {
        container: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '600px',
          maxHeight: '300px'
        },
        progressBar: {
          background: 'orange',
          height: 'calc(100% - 2em)'
    
        },
        progressCompleted: {
          background: 'blue'
        },
        progressIncomplete: {
          height: 'calc(100% - 4em)',
          background: 'yellow'
        }
      },
      {
        container: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '600px',
          maxHeight: '300px',
          // background: 'pink'
        },
        progressBar: {
          // background: 'rgb(80,80,80)',
          height: 'calc(100% - 2em)',
          width: 'calc(100% - 2em)',
          boxShadow: '0 4px 6px rgba(0,0,0,.5)'
        },
        progressCompleted: {
          background: 'rgba(40,40,40,.1)',
          height: 'calc(100% - 7em)',
          boxShadow: '0 4px 6px rgba(0,0,0,.2)'
          
        },
        progressIncomplete: {
          // height: 'calc(100% - 4em)',
          // background: 'rgb(60,60,60)'
        }
      }
    ]


    const percentageInput = (
      <input 
        onChange = {(e) => {this.updateValue('userRangeInput', e.target.value)}}
        type="range" 
        min="0" max="100" 
        className="slider" 
        id="userRangeInput" 
        value={this.state.userRangeInput}
      />
    )
  
    const bar = (
      <Bar 
        percentage={this.state.userRangeInput}
        styles={barStyles[this.state.displayBar]}
      />
    )
    
    return(
      <div className="App">
        {percentageInput}
        {bar}
      </div>
    )
  }


}

ReactDOM.render(
  <App />,
  document.getElementById('root'));