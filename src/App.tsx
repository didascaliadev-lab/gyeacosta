import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Musicoterapia  from "./pages/Musicoterapia"
import Lutherie from "./pages/Lutheria"
import Musician from "./pages/Musician"
import Contacto from "./pages/Contacto"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musicoterapia" element={<Musicoterapia />} />
        <Route path="/lutherie" element={<Lutherie />} />
        <Route path="/musician" element={<Musician />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App