import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
             <Route path='/' element={<LandingPage/>} />
             <Route path='/signup' element={<SignUp/>}/>
             <Route path='/signin' element={<SignIn/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
