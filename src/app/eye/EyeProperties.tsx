import { CSSProperties } from "react"

export type EyeProperties = {
    eyeId: string;
    clientX: number;
    clientY: number;
    eyeStyle: CSSProperties;
    keepLidClosed: number,
    blinkSpeed: number,
    blinkSpeedFactor: number,
    irisGradient: {
        gradientId: string;
        firstIrisColor: string;
        secondIrisColor: string;
        thirdIrisColor: string;
        fourthIrisColor: string;
    }
    skinColor: string;
}

export type IrisState = {
    irisTransform: {
        transform: string;
    },
    irisNodeReference: Element | null;
    lidOpenClosed: '0' | '1';
    intervalTimer: any;
}
