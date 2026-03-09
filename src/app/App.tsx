import { BrowserRouter, Routes, Route } from "react-router-dom"

import DashboardLayout from "../components/layout/DashboardLayout"
import Tasks from "../pages/Tasks"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Tasks />} />
          <Route path="/tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App