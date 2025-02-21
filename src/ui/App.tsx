import './App.css'
import { MainPage } from '../pages/MainPage'
import { Navbar } from './Navbar'

function App() {

  return (
    <div data-theme="" className='w-full h-full'>
      <div className='spacer backgroundLight'>
        <Navbar />
        <MainPage />
      </div>
    </div>
  )
}

export default App
