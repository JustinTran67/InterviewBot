// reactrouterdom
import { Routes, Route } from 'react-router-dom'
// pages
import HomePage from './pages/HomePage.jsx'
import QuestionPage from './pages/QuestionPage.jsx'
import AnalysisPage from './pages/AnalysisPage.jsx'

function App() {

  return (
    <div className="flex flex-col items-center justify-center px-[5%] py-[10%] md:py-[5%] md:px-[20%] gap-y-2 pb-[200px] font-body">
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
