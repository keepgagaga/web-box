import { useEffect, useState } from "react";
import { Stage, Layer, Rect, } from "react-konva"
import getRandomColor from "../../utils/randomColor";

export default function Konvajs() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const step = 10;
    const [rects, setRects] = useState<number[]>([]);

    useEffect(() => {
        addShape(Generate100Star(80));
    }, []);

    const addShape = (newShapes: number[]) => {
        setRects([...rects, ...newShapes]);
    }

    const Generate100Star = (num = 10): number[] => {
        const temp: number[] = [];
        for (let i = 0; i < num; i++) {
            temp.push(i);
        }
        return temp;
    }

    const deleteStar = () => {
        setRects([...rects.slice(0, -10)])
    }

    const plusStar = () => {
        addShape(Generate100Star());
    }

    return <div className="w-screen h-screen relative bg-red-100">
        <Stage width={w} height={h}>
            <Layer>
                {
                    rects.map((r, i) => {
                        return <Rect key={i} width={w - i * step} height={h - i * step} x={i * step / 2} y={i * step / 2} stroke={getRandomColor()} ></Rect>
                    })
                }
            </Layer>
        </Stage>
        <div className="absolute top-10 right-2">
            <div className="text-xl text-white">{rects.length}rect</div>
            <div className="text-5xl text-white" onClick={deleteStar}>-</div>
            <div className="text-5xl text-white" onClick={plusStar}>+</div>
        </div>
        {
            rects.length > 0 ? null : <div className="text-white absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">点击右上角“加号”可增加矩形</div>
        }
    </div>
}