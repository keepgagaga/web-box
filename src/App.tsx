import './App.css'
import HeadNav from './components/HeadNav'

function App() {

  return (
    <>
      <div className='App'>
        <HeadNav></HeadNav>
        <div className='w-screen h-screen bg-red-300'></div>
        <div className='w-screen h-screen bg-yellow-300'></div>
      </div>
    </>
  )
}

export default App
