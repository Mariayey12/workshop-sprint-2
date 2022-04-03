import React from 'react'
import { Cards } from './Cards'
import { Filter } from './Filter'
import '../style/style.css'
import NavApp from "./NavApp"

export const App = () => {
  return (
    <div className='contenedor'>
    <NavApp></NavApp>
    <Filter></Filter>
    <Cards></Cards>
  
    </div>
  )
}
