import React from 'react'
import Link from 'next/dist/client/link'

const Nav = () => {
  return (
    <div>
      <ul>
          <li><Link href="/">Home</Link></li>
          <li> <Link href="/Input">Input</Link> </li>
          <li> <Link href="/Chart">Chart</Link> </li>
          <li> <Link href="Download">Download</Link> </li>
        </ul>
    </div>
  )
}

export default Nav
