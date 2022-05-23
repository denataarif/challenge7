import React from 'react'
import Nav from '../Components/Nav'
import DefaultLayout from '../Layouts/DefaultLayout'

const Input = () => {
  return (
      <DefaultLayout>
          <div>
            <form>
                <div>
                    <input type="text" placeholder="Name"/>
                </div>
                <div>
                    <input type="number" placeholder="Age"/>
                </div>
                <div>
                    <input type="email" placeholder="Email"/>
                </div>
            </form>
          </div>
        
      </DefaultLayout>
    
  )
}

export default Input
