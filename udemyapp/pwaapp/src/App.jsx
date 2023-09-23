import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CounterComponent } from './components/CounterComponent'
import ReloadPrompt from './ReloadPrompt'

function App() {
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <hr />
      
      <CounterComponent/>
      <ReloadPrompt/>
          
    </>
    
  )
}

export default App
