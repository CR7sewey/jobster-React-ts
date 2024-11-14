import React from 'react'
import { Outlet } from 'react-router-dom'

export const HomeLayout = () => {
    return (
        <div className='container'><Outlet /></div>
    )
}
