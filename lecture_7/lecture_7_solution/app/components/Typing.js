import React, { PropTypes, Component } from 'react';

export default class Typing extends Component {
  static propTypes = {
    onInput: PropTypes.func.isRequired
  };

  componentDidMount() {
    window.addEventListener('keypress', this.props.onInput);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.props.onInput);
  }

  render() {
    return <span />;
  }
}
