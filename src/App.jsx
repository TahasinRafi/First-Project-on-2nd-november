
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Loginne from './Componentpart/Loginnepart/Loginne'



function App() {

 const muRoute = createBrowserRouter(
  createRoutesFromChildren(<Route path='/' element={<Loginne/>} />)
 )



  return (
    <>
    <RouterProvider router={muRoute} />
    </>
  )
}

export default App
