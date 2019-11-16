import React, {CSSProperties, FunctionComponent, Fragment} from "react";

type IrisProperties = {
    irisId: string;
    irisStyle: CSSProperties;
}

export const Iris: FunctionComponent<IrisProperties> = (props) => {
    
    const gradientId: string = 'gradient1';

    return (
        <Fragment>
            <radialGradient id={gradientId} gradientUnits="objectBoundingBox" cx="50%" cy="50%" r="50%">
                <stop offset= "38%" stopColor="#000000" stopOpacity="1" />
                <stop offset= "46%" stopColor="#073F80" stopOpacity="1" />
                <stop offset= "90%" stopColor="#8EC0DD" stopOpacity="1" />
                <stop offset="100%" stopColor="#2F3A46" stopOpacity="1" />
            </radialGradient>
            <g id={`${props.irisId.valueOf()}_iris`} style={props.irisStyle}>
                <ellipse cx="60" cy="60" rx="30" ry="30" opacity="1" fill={`url(#${gradientId})`} />
                <ellipse cx="50" cy="50" rx="7"  ry="7"  opacity="1" fill="#FFFFFF" fillOpacity="0.8"/>
            </g>
        </Fragment>
    );
}
