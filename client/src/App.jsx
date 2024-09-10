import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import PaymentPage from './pages/PaymentPage'

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
             <Route path='/' element={<LandingPage/>} />
             <Route path='/signup' element={<SignUp/>}/>
             <Route path='/signin' element={<SignIn/>}/>
             <Route path='/dashboard' element={<Dashboard/>}/>
             <Route path='/send-money' element={<PaymentPage/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
