import { CSSProperties } from "react";

export function IrisPositionCalculator(rect: DOMRect, clientX: number, clientY: number): CSSProperties {
    const xo = rect.left + rect.width/2;  // x-origin
    const yo = rect.top + rect.height/2; // y-origin

    const xm = clientX - xo; // the normalized x/y coords to work with
    const ym = clientY - yo;

    const xmax = rect.width/1.5;
    const ymax = rect.height/2;

    const widestFocus = 400; // when x is so far away, the eye is maximal extended
    const scaledX = xm * (xmax / widestFocus );
    let   xe = xm > 0
                ? Math.min( xmax, scaledX)
                : Math.max(-xmax, scaledX);
    const scaledY = ym * (ymax / widestFocus );
    let   ye = ym > 0
                ? Math.min( ymax, scaledY)
                : Math.max(-ymax, scaledY);
    if (xe*xe + ye*ye > xmax * ymax) {
        xe *= 0.9;
        ye *= 0.9;
    }
    
    return { transform: `translateX(${xe}px) translateY(${ye}px)` };
}