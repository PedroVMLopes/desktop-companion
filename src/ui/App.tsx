import './App.css'
import { MainPage } from '../pages/MainPage'
import { Navbar } from './Navbar'

function App() {

  return (
    <div data-theme="customTheme" className='w-full h-full'>
      <Navbar />
      <MainPage />
    </div>
  )
}

export default App
