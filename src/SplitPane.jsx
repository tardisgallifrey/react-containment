import React from 'react';

//Had to go look up how to build a CSS for a split screen

export function SplitPane(props) {
    return (
      <div className="left">
        <div className="">
          {props.left}
        </div>
        <div className="right">
          {props.right}
        </div>
        <div className="bottom">
          {props.bottom}
        </div>
      </div>
    );
  }
  
