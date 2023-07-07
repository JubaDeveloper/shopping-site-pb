import { BrowserRouter, Routes, Route } from "react-router-dom"
import { InitialPage } from "./templates/initial-page/initialpage"
import { ProductViewPage } from "./templates/product-view-page/productview"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage/>}/>
        <Route path="/product/:id" element={<ProductViewPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
