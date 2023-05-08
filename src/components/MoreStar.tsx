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

    const Generate100Star = (): shape[] => {
        const temp: shape[] = [];
        for (let i = 0; i < 100; i++) {
            temp.push({
                x: w * Math.random(),
                y: h * Math.random(),
            });
        }
        return temp;
    }

    const deleteStar = () => {
        setShapes([...shapes.slice(0, -100)])
    }

    const plusStar = () => {
        addShape(Generate100Star());
    }

    return <div className="relative">
        <Stage width={w} height={h}>
            <Layer>
                {
                    shapes.map((s, i) => {
                        return <Star key={i} x={s.x} y={s.y} numPoints={5} innerRadius={20} outerRadius={30} fill={getRandomColor()} stroke={getRandomColor()} strokeWidth={4}></Star>
                    })
                }
            </Layer>
        </Stage>
        <div className="absolute top-10 right-2">
            <div className="text-5xl text-white" onClick={deleteStar}>-</div>
            <div className="text-5xl text-white" onClick={plusStar}>+</div>
        </div>
        {
            shapes.length > 0 ? null : <div className="text-white absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">点击右上角“加号”可增加星星</div>
        }
    </div>
}