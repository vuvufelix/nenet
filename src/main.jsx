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
import ProdutoPesquisado from "./pages/ProdutoPesquisado.jsx"

import { GlobalDataProvider } from "./context/DadosGlobais.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

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
        path: "camisa",
        element: <TodasCamisetas/>
      },
      {
        path: "tenis",
        element: <TodosTenis/>
      },
      {
        path: "sapato",
        element: <TodosSapatos/>
      },
      {
        path: "bolsa",
        element: <TodasBolsas/>
      },
      {
        path: "carrinho",
        element: <Carrinho/>
      },
      {
        path: "product/:id",
        element: <ProdutoIndividual/>
      },
      {
        path: "search/:name",
        element: <ProdutoPesquisado/>
      },
      {
        path: "success",
        element: <SucessoNoPagamento/>
      },
      {
        path: "cancel",
        element: <PagamentoCancelado/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalDataProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </GlobalDataProvider>
  </StrictMode>
)