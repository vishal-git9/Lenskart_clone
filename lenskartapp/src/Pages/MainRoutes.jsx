import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dobe from '../Component/Dobe'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/dobe" element={<Dobe/>}></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
