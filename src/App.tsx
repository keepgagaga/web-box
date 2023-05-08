import './App.css'
import HeadNav from './components/HeadNav'
import MoreStar from './components/MoreStar'

function App() {

  return (
    <>
      <div className='App'>
        <HeadNav></HeadNav>
        <div className='w-screen h-screen bg-red-300'>
          <MoreStar></MoreStar>
        </div>
      </div>
    </>
  )
}

export default App
