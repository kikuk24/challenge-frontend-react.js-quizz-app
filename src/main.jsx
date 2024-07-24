import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext.jsx'
import QuizPage from './components/Pages/QuizPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/quiz" element={<QuizPage/>} />
      </Routes>
    </Router>
    </UserProvider>
  </React.StrictMode>,
)
