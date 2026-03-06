import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "../components/layout/Navbar"

import Dashboard from "../pages/Dashboard"
import Tasks from "../pages/Tasks"
import Settings from "../pages/Settings"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
