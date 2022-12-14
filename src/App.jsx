import Home from './pages/Home'
import Cart from './pages/Cart'
import Perfil from './pages/Perfil'
import './assets/main.css'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import { AuthProvider } from './context/AuthContext'
import { useAuth } from './hooks/useAuth'

function App() {
  const { auth } = useAuth()
  return (
    <AuthProvider>
      <div className="App">
        <Routes >
          <Route exact path='/' element={<Home />} />
          <Route exact path='cart' element={<Cart />} />
          <Route exact path='perfil' element={<Perfil />} />
        </Routes>
        {auth ? <Menu /> : null}
      </div>
    </AuthProvider>
  )
}

export default App
