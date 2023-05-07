import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Threejs from './pages/Threejs/Threejs.tsx'
import Konvajs from './pages/Konvajs/Konvajs.tsx'
import D3js from './pages/D3js/D3js.tsx'
import Wasm from './pages/Wasm/wasm.tsx'
import FlutterWeb from './pages/FlutterWeb.tsx'
import About from './pages/About.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/threejs',
    element: <Threejs></Threejs>
  },
  {
    path: '/konvajs',
    element: <Konvajs></Konvajs>
  },
  {
    path: '/d3js',
    element: <D3js></D3js>
  },
  {
    path: '/wasm',
    element: <Wasm></Wasm>
  },
  {
    path: '/flutterWeb',
    element: <FlutterWeb></FlutterWeb>
  },
  {
    path: 'about',
    element: <About></About>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
