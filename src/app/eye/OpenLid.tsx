import React, {FunctionComponent, Fragment} from "react";

type OpenLidProperties = {
    openLidId: string;
    skinColor: string;
}


export const OpenLid: FunctionComponent<OpenLidProperties> = (props) => {

    const shadowId: string = 'shadow';

    return (
        <Fragment>
            <filter id={shadowId}>
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset       dx="0" dy="8" />
                <feColorMatrix  type="matrix"
                                values="0 0 0 0  0
                                0 0 0 0  0
                                0 0 0 0  0
                                0 0 0 .5 0"/>
                <feBlend        in="SourceGraphic" mode="normal"/>
            </filter>
            <g id={`${props.openLidId.valueOf()}_openLids`}>
                <path d="M0 60 A60,60 0 0,1 120,60 A60,30 0 0,0 0,60 Z" opacity="1" fill={props.skinColor} fillOpacity="1" filter={`url(#${shadowId})`} />
                <path d="M0 60 A60,60 0 0,0 120,60 A60,40 0 0,1 0,60 Z" opacity="1" fill={props.skinColor} fillOpacity="1" />
            </g>
        </Fragment>
    );
}
