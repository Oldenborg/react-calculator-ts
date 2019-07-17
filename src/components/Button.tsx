import React, { Component } from 'react';

type ButtonProps = {
  large?: boolean
}

class Button extends Component<ButtonProps> {
  render() {
    return (
      <button className={"Button " + (this.props.large ? 'Button--large' : '')}>{ this.props.children }</button>
    )
  }
};

export default Button;
