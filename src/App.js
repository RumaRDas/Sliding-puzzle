
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Footer from './component/footer/Footer'
import Header from './component/header/Header';
import Blanko from './pages/blanko/Blanko'
import Dashboard from './pages/dashboard/Dashboard'
import Slido from './pages/slido/Slido'
import Tetro from './pages/tetro/Tetro'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <>
        <Header />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Dashboard  />} />
          <Route exact path="/blanko" element={<Blanko />} />
          <Route exact path="/slido" element={<Slido />} />
          <Route exact path="/tetro" element={<Tetro />} />
        </Routes>
        <Footer />
      </>
    </>
  )
}

export default App;
