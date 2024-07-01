import React from 'react'

const Header = () => {
  return (
    <div className='bg-black border-b-2'>
      <nav className='p-2  flex items-center justify-between px-9'>
        <h2 className='text-white text-3xl font-semibold'><span className='text-red-800'>Movie</span>Ref</h2>
        <h2 className='text-xl font-medium text-white'>Add Movie</h2>
      </nav>
    </div>
  )
}

export default Header
