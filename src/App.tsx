import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, Tutorial } from './features'

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tutorial" element={<Tutorial />} />
      </Routes>
    </div>
  )
}
