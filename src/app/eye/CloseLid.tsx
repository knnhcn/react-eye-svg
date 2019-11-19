import React, {FunctionComponent} from "react";

type CloseLidProperties = {
    closeLidId: string;
    skinColor: string;
    openClosed: '0' | '1';
}

export const CloseLid: FunctionComponent<CloseLidProperties> = (props) => {
    return (
        <g id={`${props.closeLidId.valueOf()}_closeLid`}>
            <path d="M0 60 A60,60 0 0,1 120,60 A60,40 0 0,1 0,60 Z" opacity={props.openClosed} fill={props.skinColor} fillOpacity="1" />
        </g>
    );
}
