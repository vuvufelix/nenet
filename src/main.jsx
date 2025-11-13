import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"

import TodosProdutos from './pages/TodosProdutos.jsx'
import TodosTenis from './pages/TodosTenis.jsx'
import TodosSapatos from './pages/TodosSapatos.jsx'
import TodasBolsas from './pages/TodasBolsas.jsx'
import TodasCamisetas from './pages/TodasCamisetas.jsx'
import ProdutoIndividual from "./pages/ProdutoIndividual.jsx"
import Carrinho from "./pages/Carrinho.jsx"
import PagamentoCancelado from "./pages/PagamentoCancelado.jsx"
import SucessoNoPagamento from "./pages/SucessoNoPagamento.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FilterCategoryProvider } from "./context/filterContext.jsx"

const queryClient = new QueryClient()

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
      },
      {
        path: "/product/:id",
        element: <ProdutoIndividual/>
      },
      {
        path: "/success",
        element: <SucessoNoPagamento/>
      },
      {
        path: "/cancel",
        element: <PagamentoCancelado/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterCategoryProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </FilterCategoryProvider>
  </StrictMode>
)