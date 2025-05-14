import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProtectedRoute, AdminRoute } from './service/Guard'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App