// import React from 'react'
import NavBar from '../common/nav-bar'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer'
import { Boxes } from '../ui/background-boxes'

const AppLayout = () => {

    return (
        <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 ">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 pointer-events-none [mask-image:radial-gradient(circle_at_center,transparent_10%,white_95%)]" />
            <div className='fixed inset-0'>
                <Boxes />
            </div>
            <div className='fixed z-[100] top-1 md:top-3 left-1/2 -translate-x-1/2'>
                <NavBar />
            </div>

            <div className='max-w-[80%] mx-auto mt-[100px] text-gray-200 pb-10'>
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default AppLayout
