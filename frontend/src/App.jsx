// reactrouterdom
import { Routes, Route } from 'react-router-dom'
// pages
import HomePage from './pages/HomePage.jsx'

function App() {

  return (
    <div className="flex items-center justify-center text-center">
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
