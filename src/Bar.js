import React, { Component } from 'react';

import './Bar.scss';

const Bar = props => {
  const percentage = props.percentage;

  const progressCompletedStyle = Object.assign({}, {
    width: `${percentage}%`
  }, props.styles.progressCompleted)

  const progressIncompleteStyle = Object.assign({}, {
    width: `${100 - percentage}%`
  }, props.styles.progressIncomplete)

  return(
    <div 
      className="Fizzle-Bar container"
      style={props.styles.container}>

      <div 
        className="Fizzle-Bar progress-bar" 
        style={props.styles.progressBar}>

        <div
          className="Fizzle-Bar progress-completed"
          style={progressCompletedStyle}>

          <div
            className="">
          </div>
        </div>
        <div
          className="Fizzle-Bar progress-incomplete"
          style={progressIncompleteStyle}>
        </div>
      </div>
    </div>
  )
}

export default Bar;