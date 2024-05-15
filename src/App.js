
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppFooter from './components/footer';
import AppHeader from './components/header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home.js'
import Login from './routes/Login.js'
import Cadastro from './routes/Cadastro.js'
function App() {

  return (
    
    <Router>
    <div>
        <AppHeader /> 

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Login" element={<Login />} />
          <Route path='/Cadastro' element={<Cadastro/>} />
        
        </Routes>
        <AppFooter />
    </div>

  </Router>
  


  )
}

export default App;
