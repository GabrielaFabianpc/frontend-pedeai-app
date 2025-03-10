import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeRestaurant, SignUpRestaurant } from './pages/index.ts'
import { LoginRestaurant } from './pages/LoginRestaurant/index.tsx'
import { SearchRestaurant } from './pages/index.ts'
import App from './App.tsx'
import { OrdersRestaurant } from './pages/OrdersRestaurant/index.tsx'
import { ProductsRestaurant } from './pages/ProductsRestaurant/index.tsx'
import { AddProductRestaurant } from './pages/AddProductRestaurant/index.tsx'
import { HomeUser } from './pages/HomeUser/index.tsx'
import { DetailsProductUser } from './pages/DetailsProductUser/index.tsx'
import { Cart } from './pages/Cart/index.tsx'
import { CartPagamento } from './pages/CartPagamento/index.tsx'
import { OrdersUser } from './pages/OrdersUser/index.tsx'


const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <SearchRestaurant />
      },
      {
        path: '/restaurants',
        element: <SignUpRestaurant />
      },
      {
        path: '/login',
        element: <LoginRestaurant />
      },
      {
        path: '/admin/:restaurantId',
        element: <HomeRestaurant />
      },
      {
        path: '/admin/orders',
        element: <OrdersRestaurant />
      },
      {
        path: '/admin/products',
        element: <ProductsRestaurant />
      },
      {
        path: '/admin/products/new',
        element: <AddProductRestaurant />
      },
      {
        path: '/:restaurantId',
        element: <HomeUser />
      },
      {
        path: '/:restaurantId/:productName',
        element: <DetailsProductUser />
      },
      {
        path: '/:restaurantId/cart',
        element: <Cart />
      },
      {
        path: '/:restaurantId/cart/pagamento',
        element: <CartPagamento />
      },
      {
        path: '/:restaurantId/orders',
        element: <OrdersUser />
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
