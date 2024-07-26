import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/index.html' element={<Home />} />
      <Route path='/projects' element={<h1>Projects</h1>} />
      <Route path='/*' element={<div className='flex h-full items-center justify-center'><h1 className='text-center text-9xl font-semibold text-red-500'>404</h1></div>} />
    </Routes>
  )
}

export default App
