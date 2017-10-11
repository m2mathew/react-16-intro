import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Hello } from './hello';
import { Modal } from './modal';

class App extends Component {
  state =  {
    data: {
      name: 'Mike',
      error: false,
    },
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    // sendErrorLog(error, info);
  }

  fetchFromRemote = () => {
    // Make api call
    const data = null;
    this.setState({
      data,
    });
  }

  render() {
    const { data, error } = this.state;

    return error ? 'Something went horribly wrong' : (
      [
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ReactJS Dallas</h1>
        </header>,
        <div myCustomId="42" className="App-intro">
          <p>
            <button onClick={this.fetchFromRemote}>Fetch</button>
            <Hello data={data} />
          </p>
        </div>,
        <Modal >
          <h1 style={{ border: '2px solid cornflowerblue', textAlign: 'center' }}>I am a modal</h1>
        </Modal>
      ]
    );
  }
}

export default App;
