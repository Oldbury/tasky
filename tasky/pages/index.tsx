import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import NewTask from '../components/Tasks/New'
import { useState } from 'react'
import TaskCard from '../components/Tasks/Card'
import TaskList from '../components/Tasks/TaskList'

export default function Home() {

  const [showCreateTask, setShowCreateTask] = useState(false)

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-auto bg-gray-200 dark:bg-gray-700 z-0 text-black dark:text-white " >
      <Head>
        <title>Tasky</title>
      </Head>
      <Navbar />
      {/* <NewTask show={showCreateTask} /> */}
      {/* content */}
      <div className="flex flex-col md:flex-row ml-0 md:ml-3  justify-between w-full px-5 py-1 mt-1 md:mt-5" >
        <div>
          <h1 className="font-bold text-xl md:text-4xl" >To Do</h1>
          <div>
            {/* <TaskCard todo="Create to do" /> */}
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl md:text-4xl" >To Do</h1>
          <div className="space-y-1" >
           <TaskList />

          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl md:text-4xl" >To Do</h1>
          <div>
            {/* <TaskCard todo="Create to do" /> */}
          </div>
        </div>
      </div>


    </div>
  )
}
