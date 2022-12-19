import { Routes, Route } from "react-router-dom";
import { Home, Admin } from './components';

function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
