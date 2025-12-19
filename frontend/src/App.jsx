// reactrouterdom
import { Routes, Route } from 'react-router-dom'
// pages
import HomePage from './pages/HomePage.jsx'
import QuestionPage from './pages/QuestionPage.jsx'
import AnalysisPage from './pages/AnalysisPage.jsx'
// assets
import GithubLogo from './assets/GithubLogo.jsx';
import LinkedInLogo from './assets/LinkedInLogo.jsx';
import InstagramLogo from './assets/InstagramLogo.jsx';

function App() {

  return (
    <div className="flex flex-col justify-center w-full font-body text-text font-light">
      <div className="px-[5%] py-[10%] md:py-[5%] md:px-[20%] gap-y-2 pb-[200px]">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/interview' element={<QuestionPage />} />
          <Route path='/analysis' element={<AnalysisPage />} />
        </Routes>
      </div>
      <div className="mt-40 flex items-center justify-center w-screen h-[200px] bg-gray-200">
        <a className="w-8 h-8 m-4" href="https://github.com/JustinTran67" target="_blank" rel="noopener noreferrer"><GithubLogo className="fill-white hover:fill-yellow transition duration-200 ease-in-out" /></a>
        <a className="w-8 h-8 m-4" href="https://www.linkedin.com/in/justin-tin-tran/" target="_blank" rel="noopener noreferrer"><LinkedInLogo className="fill-white hover:fill-yellow transition duration-200 ease-in-out" /></a>
        <a className="w-8 h-8 m-4" href="https://www.instagram.com/justin.t.tran/" target="_blank" rel="noopener noreferrer"><InstagramLogo className="fill-white hover:fill-yellow transition duration-200 ease-in-out"/></a>
      </div>
    </div>
  )
}

export default App
