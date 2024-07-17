import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/projects' element={<h1>Projects</h1>} />
      <Route path='/*' element={<div className='flex justify-center items-center h-full'><h1 className='text-center text-red-500 font-semibold text-9xl'>404</h1></div>} />
    </Routes>
  )
}

export default App
