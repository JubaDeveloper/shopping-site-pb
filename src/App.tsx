import { BrowserRouter, Routes, Route } from "react-router-dom"
import { InitialPage } from "./templates/initial-page/initialpage"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
