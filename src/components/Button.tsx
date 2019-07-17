import React, { Component } from 'react';

type ButtonProps = {
  onClick: Function
  large?: boolean
}

class Button extends Component<ButtonProps> {
  render() {
    return (
      <button onClick={ () => this.props.onClick()}className={"Button " + (this.props.large ? 'Button--large' : '')}>{ this.props.children }</button>
    )
  }
};

export default Button;
