import { CSSProperties } from "react"

export type EyeProperties = {
    eyeId: string;
    clientX: number;
    clientY: number;
    eyeStyle: CSSProperties;
    keepLidClosed: number,
    blinkSpeed: number,
    blinkSpeedFactor: number
}

export type IrisState = {
    irisTransform: {
        transform: string;
    },
    irisNodeReference: Element | null;
    lidOpenClosed: '0' | '1';
    intervalTimer: any;
}
