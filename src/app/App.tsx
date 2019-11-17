import React, { CSSProperties } from 'react';

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
    const leftEye: CSSProperties = {
      top:  '100px',
      left: '100px',
      width:  '100px',
      height: '80px',
      position: 'absolute',
    }

    const rightEye: CSSProperties = {
      top:  '100px',
      left: '250px',
      width:  '100px',
      height: '80px',
      position: 'absolute',
    }

    const irisGradient1 = {
      gradientId: 'gradient1',
      firstIrisColor: "#000000",
      secondIrisColor: "#073F80",
      thirdIrisColor: "#8EC0DD",
      fourthIrisColor: "#2F3A46"
    }

    const irisGradient2 = {
      gradientId: 'gradient2',
      firstIrisColor: "#000000",
      secondIrisColor: "#138007",
      thirdIrisColor: "#96dd8e",
      fourthIrisColor: "#2f4636"
    }

    return (
      <div className="main-container" onMouseMove={this._onMouseMove.bind(this)}>
          <Eye  eyeId={"leftEye"}
                eyeStyle={leftEye}
                clientX={this.state.clientX}
                clientY={this.state.clientY}
                keepLidClosed={300}
                blinkSpeedFactor={7}
                blinkSpeed={1000}
                irisGradient={irisGradient1}>
          </Eye>
          <Eye  eyeId={"rightEye"}
                eyeStyle={rightEye}
                clientX={this.state.clientX}
                clientY={this.state.clientY}
                keepLidClosed={300}
                blinkSpeedFactor={7}
                blinkSpeed={1000}
                irisGradient={irisGradient2}>
          </Eye>
      </div>
    );
  }
}
