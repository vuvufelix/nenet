import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"

import TodosProdutos from './pages/TodosProdutos.jsx'
import TodosTenis from './pages/TodosTenis.jsx'
import TodosSapatos from './pages/TodosSapatos.jsx'
import TodasBolsas from './pages/TodasBolsas.jsx'
import TodasCamisetas from './pages/TodasCamisetas.jsx'
import Carrinho from "./pages/Carrinho.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <TodosProdutos/>
      },
      {
        path: "/camisetas",
        element: <TodasCamisetas/>
      },
      {
        path: "/tenis",
        element: <TodosTenis/>
      },
      {
        path: "/sapatos",
        element: <TodosSapatos/>
      },
      {
        path: "/bolsas",
        element: <TodasBolsas/>
      },
      {
        path: "/carrinho",
        element: <Carrinho/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)