import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div className='App'>
        <Link to={'/threejs'}>threejs</Link>
        <Link to={'/konvajs'}>konvajs</Link>
        <Link to={'/d3js'}>d3js</Link>
        <Link to={'/wasm'}>wasm</Link>
        <Link to={'/flutterWeb'}>flutterWeb</Link>
      </div>
    </>
  )
}

export default App
