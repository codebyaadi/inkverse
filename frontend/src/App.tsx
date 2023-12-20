import { Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/navbar"
import AuthPage from "./pages/auth.page"
import Homepage from "./pages/home.page"

function App() {
  return (
      <main className="w-full h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth/*" element={<AuthPage />} />
        </Routes>
      </main>
  )
}

export default App