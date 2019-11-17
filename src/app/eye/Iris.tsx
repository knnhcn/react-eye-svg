import React, {CSSProperties, FunctionComponent, Fragment} from "react";

type IrisProperties = {
    irisId: string;
    irisStyle: CSSProperties;
    irisGradient: {
        gradientId: string;
        firstIrisColor: string;
        secondIrisColor: string;
        thirdIrisColor: string;
        fourthIrisColor: string;
    }
}

export const Iris: FunctionComponent<IrisProperties> = (props) => {
    
    return (
        <Fragment>
            <radialGradient id={props.irisGradient.gradientId} gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%">
                <stop offset= "38%" stopColor={props.irisGradient.firstIrisColor} stopOpacity="1" />
                <stop offset= "46%" stopColor={props.irisGradient.secondIrisColor} stopOpacity="1" />
                <stop offset= "90%" stopColor={props.irisGradient.thirdIrisColor} stopOpacity="1" />
                <stop offset="100%" stopColor={props.irisGradient.fourthIrisColor} stopOpacity="1" />
            </radialGradient>
            <g id={`${props.irisId.valueOf()}_iris`} style={props.irisStyle}>
                <ellipse cx="60" cy="60" rx="30" ry="30" opacity="1" fill={`url(#${props.irisGradient.gradientId})`} />
                <ellipse cx="50" cy="50" rx="7"  ry="7"  opacity="1" fill="#FFFFFF" fillOpacity="0.8"/>
            </g>
        </Fragment>
    );
}
