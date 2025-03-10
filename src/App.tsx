
import { CartContextProvider } from './context/CartContext'
import { Outlet } from 'react-router'




const App = () => {

  return (
    <CartContextProvider>
      <Outlet/>
    </CartContextProvider>
  )
}

export default App
