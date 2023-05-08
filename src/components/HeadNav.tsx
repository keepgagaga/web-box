import { Link } from "react-router-dom";

const navData = [
    {
        label: 'threejs',
        path: 'threejs',
    },
    {
        label: 'konvajs',
        path: 'konvajs',
    },
    {
        label: 'd3js',
        path: 'd3js',
    },
    {
        label: 'wasm',
        path: 'wasm',
    },
    {
        label: 'flutterWeb',
        path: 'flutterWeb',
    },
];

export default function HeadNav() {
    return <>
        <div className="flex flex-row justify-center items-center w-screen h-10 bg-transparent fixed z-10">
            {
                navData.map(n => {
                    return <div key={n.label} className="mx-8"><Link to={n.path}>{n.label}</Link></div>
                })
            }
        </div>
    </>
}