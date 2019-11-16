export type EyeProperties = {
    eyeId: string;
    clientX: number;
    clientY: number;
}

export type IrisState = {
    irisTransform: {
        transform: string;
    },
    irisNodeReference: Element | null;
    lidOpenClosed: '0' | '1';
}
