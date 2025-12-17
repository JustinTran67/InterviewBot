// reactrouterdom
import { Routes, Route } from 'react-router-dom'
// pages
import HomePage from './pages/HomePage.jsx'
import QuestionPage from './pages/QuestionPage.jsx'
import AnalysisPage from './pages/AnalysisPage.jsx'

function App() {

  return (
    <div className="flex items-center justify-center text-center">
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/interview' element={<QuestionPage />} />
          <Route path='/analysis' element={<AnalysisPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
