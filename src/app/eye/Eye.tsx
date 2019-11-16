import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import {EyeProperties, IrisState} from "./EyeProperties";

import './Eye.css';
import {Iris} from "./Iris";
import {OpenLid} from "./OpenLid";
import {CloseLid} from "./CloseLid";
import { IrisPositionCalculator } from "./IrisPositionCalculator";

export default class Eye extends React.Component<EyeProperties, IrisState> {

    private intervalId: any;

    constructor(props: EyeProperties) {
        super(props);
    
        this.state = {
          irisNodeReference: null,
          irisTransform: {
              transform: ''
          },
          lidOpenClosed: '0'
        };
        this.handleCloseLidClick = this.handleCloseLidClick.bind(this);
      }

    componentDidMount(): void {
        this.setState({ irisNodeReference: ReactDOM.findDOMNode(this) as Element });

        this.intervalId = setInterval( () => {
            if (this.state.lidOpenClosed === '1') {
                return;
            } else {
                this.setState({ lidOpenClosed: '1'})
            }
            setTimeout(() => this.setState({ lidOpenClosed: '0'}), 300)
        }, 7 * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
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
            <svg id={this.props.eyeId} viewBox="0 0 120 120" onClick={this.handleCloseLidClick}>
                <Iris irisId={this.props.eyeId} irisStyle={irisTransform}></Iris>
                <OpenLid openLidId={this.props.eyeId}></OpenLid>
                <CloseLid closeLidId={this.props.eyeId} openClosed={this.state.lidOpenClosed}></CloseLid>
            </svg>
        );
    }
}
