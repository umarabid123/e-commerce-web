import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Correct imports
import Home from '../pages/home/Home'

const AppRoutes = () => {  // Renamed component to avoid naming conflict
  return (
   <div className="app-routes">
     <BrowserRouter>
       <Routes> {/* Use Routes from react-router-dom */}
          <Route path="/" element={<Home />} />
       </Routes>
     </BrowserRouter>
   </div>
  )
}

export default AppRoutes