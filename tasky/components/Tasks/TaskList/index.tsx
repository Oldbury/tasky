import React, { useState } from 'react'
import TaskCard from '../Card'
// import {reactLocalStorage} from 'reactjs-localstorage'


const TaskList = () => {

    const values = []


    return (
        <div>
            {values.map(function (data, key)  {
                return (
                    // <TaskCard title={data.getItem()} />
                    <h1>Task {data} </h1>
                    // <h1></h1>
                )
            })}
           
        </div>
    )
}

export default TaskList