import { Component } from 'react';
import ReactDOM from 'react-dom';

export class Modal extends Component {
  render() {
    return (
      ReactDOM.createPortal(
        this.props.children,
        document.getElementById('portal'),
      )
    );
  }
}
