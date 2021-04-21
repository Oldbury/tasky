import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100" >
      <div className="m-auto bg-white px-10 py-10 rounded-lg shadow-lg " >
      <h1 className="text-4xl font-bold" >Welcome to the <span className="text-blue-600" >template </span> </h1>
      <p>This template has the following setup:</p>
        <li>NextJS</li>
        <li>TailwindCSS</li>
        <li>Typescript</li>
        <li>Cypress</li>
        <li>Jest</li>
      </div>
      
    </div>
  )
}
