import { useEffect, useState } from "react";
import { Stage, Layer, Rect, } from "react-konva"

export default function Konvajs() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const step = 10;
    const [rects, setRects] = useState<number[]>([]);

    useEffect(() => {
        const temp = [];
        for (let i = 0; i < 65; i++) {
            temp.push(i);
        }
        setRects(temp);
    }, []);

    return <>
        <Stage width={w} height={h}>
            <Layer>
                {
                    rects.map(r => {
                        return <Rect key={r} width={w - r * step} height={h - r * step} x={r * step / 2} y={r * step / 2} stroke='black' ></Rect>
                    })
                }
            </Layer>
        </Stage>
    </>
}