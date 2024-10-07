import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <header className='bg-slate-800'>
        <div className='mx-auto max-w-6xl py-10'>
            <h1 className='text-4xl font-extrabold text-white'>
                Product Management
            </h1>
        </div>

    </header>
    <Outlet/>
    </>
  )
}

export default Layout