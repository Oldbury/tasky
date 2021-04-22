import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import NewTask from '../Tasks/New'


const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const [showNewTask, setShowNewTask] = useState(false)
    const [closeModal, setCloseModal] = useState(!showNewTask)

    // useEffect(() => {
    //     setShowNewTask(true)
    // }, [showNewTask])


    return (
        <nav className="flex  justify-between  md:justify-start w-full md:w-auto px-1 py-1 md:px-5 md:py-5 shadow-lg bg-white dark:bg-gray-800 space-y-4 " >
            <div className="flex flex-row md:flex-col justify-between " >
                <h1 className="text-lg md:text-3xl font-extrabold text-black dark:text-white  " >Tasky</h1>
            <NewTask />
            
                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="text-black dark:text-white "
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>
                </button>
            </div>

        </nav>
    )
}

export default Navbar