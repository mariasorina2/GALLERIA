import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Homepage from "./pages/Homepage/Homepage"
import Footer from "./components/Footer/Footer"


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
