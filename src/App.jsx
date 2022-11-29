import { useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import IsLoading from './components/IsLoading'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Purchases from './pages/Purchases'
function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <>
      <HashRouter>
        {
          isLoading && <IsLoading />
        }
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<Products />} />
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/purchases' element={<Purchases />} />
            </Route>
          </Routes>
        </div>
      </HashRouter>

    </>
  )
}

export default App
