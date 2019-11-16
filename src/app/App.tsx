import React from 'react';

import './App.css';
import Eye from './eye/Eye';

type AppState = {
  clientX: number;
  clientY: number;
};

export default class App extends React.Component<any, AppState> {

  state: AppState = {
    clientX: 0,
    clientY: 0
  };

  _onMouseMove(e: any) {
    this.setState({ clientX: e.clientX, clientY: e.clientY });
  }

  render() {
    return (
      <div className="main-container" onMouseMove={this._onMouseMove.bind(this)}>
          <Eye eyeId={"leftEye"} clientX={this.state.clientX} clientY={this.state.clientY}></Eye>
          <Eye eyeId={"rightEye"} clientX={this.state.clientX} clientY={this.state.clientY}></Eye>
      </div>
    );
  }
}
