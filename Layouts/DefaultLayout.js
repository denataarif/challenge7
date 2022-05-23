import React from 'react'
import Nav from '../Components/Nav'
import Input from '../pages/Input'

const DefaultLayout = ({children}) => {
  return (
    <div>
        <Nav/>
        <main>
            {children}
        </main>
    </div>
  )
}

export default DefaultLayout
