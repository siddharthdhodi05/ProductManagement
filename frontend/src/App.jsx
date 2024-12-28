import React from 'react'
import ProductForm from './components/productForm'
import ProductsPage from './components/ProductDisplay'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<ProductForm/>
      },
      {
        path:"/products",
        element:<ProductsPage/>
      }
    ]
  }
])

const App = () => {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
