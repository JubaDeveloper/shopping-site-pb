import { ReactElement } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { CartView } from "./templates/cart-view/cartview"
import { InitialPage } from "./templates/initial-page/initialpage"
import { ProductViewPage } from "./templates/product-view-page/productview"

function App(): ReactElement {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage/>}/>
        <Route path="/product/:id" element={<ProductViewPage/>}/>
        <Route path="/cart" element={<CartView/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
