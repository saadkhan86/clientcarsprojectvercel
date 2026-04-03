import "./App.css"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Products from "./components/Products/Products"
import ProductView from "./components/ProductView/ProductView"
import Auth from "./components/Auth/Auth"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductView />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
