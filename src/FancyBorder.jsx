import React from 'react';

//The inline style for the border doesn't match the lesson, but it works

export function FancyBorder(props) {
    return (
      <div style={{borderWidth: "5px", borderStyle: "solid", borderColor: props.color}}>
      {/* Whatever child elements we give FancyBorder, they will appear here in DOM*/}
        {props.children}
      </div>
    );
  }