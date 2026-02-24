import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages"

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
