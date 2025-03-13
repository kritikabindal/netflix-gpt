import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg" alt="logo" />
      </div>
    <form className='w-3/12 relative p-12 bg-black'>
      <input type="text" placeholder='Email address' className='p-2 m-2 text-white' />
      <input type="password" placeholder='password' className='p-2 m-2 text-white' />
      <button className='p-4 m-4'>Sign IN</button>
    </form>
    </div>
  )
}

export default Login