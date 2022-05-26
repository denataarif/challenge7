import React from 'react'
import Link from 'next/dist/client/link'

const Nav = () => {
  return (
    // <nav className='navbar'>
    //   <div className='container-fluid'>
    //     <div className='collapse navbar-collapse d-flex'>
    //       <ul className='navbar-nav'>
    //         <li className='nav-item'><Link href="/">Home</Link></li>
    //         <li className='nav-item'> <Link href="/Input">Input</Link> </li>
    //         <li className='nav-item'> <Link href="/Chart">Chart</Link> </li>
    //         <li className='nav-item'> <Link href="Download">Download</Link> </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link className='nav-item ' href="/">
          <a className='text-decoration-none h1 text-dark'>HOME</a>
        </Link>
        <ul className='nav justify-content-end '>
            <li className='nav-item'>
              <Link href="/Input">
                <a className='text-decoration-none text-dark'>Input</a>  
              </Link>
            </li>
            <li className='nav-item'> 
              <Link href="/Chart">
                <a className='text-decoration-none text-dark mx-3'>Chart</a>  
              </Link> 
            </li>
            <li className='nav-item'> 
              <Link href="/Download">
                <a className='text-decoration-none text-dark'>Download</a>
              </Link> 
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default Nav
