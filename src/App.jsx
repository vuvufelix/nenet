import Footer from './components/layouts/Footer.jsx'
import Header from "./components/layouts/Header.jsx"
import NavBar from "./components/layouts/NavBar.jsx"
import TodosProdutos from "./pages/TodosProdutos.jsx"
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App