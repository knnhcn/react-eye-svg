import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import {EyeProperties, IrisState} from "./EyeProperties";

import './Eye.css';
import {Iris} from "./Iris";
import {OpenLid} from "./OpenLid";
import {CloseLid} from "./CloseLid";
import { IrisPositionCalculator } from "./IrisPositionCalculator";

export default class Eye extends React.Component<EyeProperties, IrisState> {

    constructor(props: EyeProperties) {
        super(props);
    
        this.state = {
          irisNodeReference: null,
          irisTransform: {
              transform: ''
          },
          lidOpenClosed: '0',
          intervalTimer: null
        };
      }

    componentDidMount(): void {
        this.setState({ 
            irisNodeReference: ReactDOM.findDOMNode(this) as Element,
            intervalTimer: setInterval(() => {
                if (this.state.lidOpenClosed === '1') {
                    return;
                } else {
                    this.setState({ lidOpenClosed: '1'})
                }
                setTimeout(() => this.setState({ lidOpenClosed: '0'}), this.props.keepLidClosed)
            }, this.props.blinkSpeedFactor * this.props.blinkSpeed)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalTimer);
    }

    handleCloseLidClick(event: React.MouseEvent) {
        event.preventDefault();
        this.setState({lidOpenClosed: (this.state.lidOpenClosed === '1') ? '0' : '1'})
    }
      

    private getIrisTransformStyle(): CSSProperties {
        if (this.state.irisNodeReference) {
            const rect = this.state.irisNodeReference
                            .querySelectorAll(`#${this.props.eyeId}_iris ellipse`)[0]
                            .getBoundingClientRect() as DOMRect;
            return IrisPositionCalculator(rect, this.props.clientX, this.props.clientY);
        } else { 
            return this.state.irisTransform;
        }
    }

    render() {
        const irisTransform = this.getIrisTransformStyle();

        return (
            <svg style={this.props.eyeStyle} id={this.props.eyeId} viewBox="0 0 120 120" onClick={this.handleCloseLidClick.bind(this)}>
                <Iris   irisId={this.props.eyeId}
                        irisStyle={irisTransform}
                        irisGradient={this.props.irisGradient}>
                </Iris>
                <OpenLid openLidId={this.props.eyeId} skinColor={this.props.skinColor}></OpenLid>
                <CloseLid closeLidId={this.props.eyeId} skinColor={this.props.skinColor} openClosed={this.state.lidOpenClosed}></CloseLid>
            </svg>
        );
    }
}
