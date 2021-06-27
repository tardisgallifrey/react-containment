import React from 'react';
import {FancyBorder} from './FancyBorder';

//Because we use FancyBorder in both component functions,
//we get a double border

//We use the component with props of Dialog as a child to
//FancyBorder

//Because we use Dialog only here, it does not need export-ing

export function WelcomeDialog() {
    return (
      <FancyBorder color="green">
      {/* The following are children of FancyBorder.  They are sent to FancyBorder to render */}
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" 
      />
        {/* If you give a component children, you must use a closing tag not /> */}
      </FancyBorder>
    );
  }

//I missed it for a while
//To make the class component from below work
//props.children has to be added to original Dialog component
function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    );
  }


export class SignUpDialog extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.state = {login: ''};
    }
  
    render() {
      return (
          <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
                <input value={this.state.login}
                  onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                  Sign Me Up!
                </button>
          </Dialog>          
        
      );
    }
  
    handleChange(e) {
      this.setState({login: e.target.value});
    }
  
    handleSignUp() {
      alert(`Welcome aboard, ${this.state.login}!`);
    }
  }