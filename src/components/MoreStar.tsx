import { useEffect, useState } from "react";
import { Stage, Layer, Star } from "react-konva"
import getRandomColor from "../utils/randomColor";

interface shape {
    x: number,
    y: number,
}

export default function MoreStar() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const [shapes, setShapes] = useState<shape[]>([]);

    const addShape = (newShapes: shape[]) => {
        setShapes([...shapes, ...newShapes]);
    }

    useEffect(() => {
        const temp: shape[] = [];
        for (let i = 0; i < 100; i++) {
            temp.push({
                x: w * Math.random(),
                y: h * Math.random(),
            });
        }
        addShape(temp);
    }, []);

    return <>
        <Stage width={w} height={h}>
            <Layer>
                {
                    shapes.map((s, i) => {
                        return <Star key={i} x={s.x} y={s.y} numPoints={5} innerRadius={20} outerRadius={30} fill={getRandomColor()} stroke={getRandomColor()} strokeWidth={4}></Star>
                    })
                }
            </Layer>
        </Stage>
    </>
}