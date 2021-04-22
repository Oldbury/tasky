import React from 'react'
import ReactMarkdown from 'react-markdown'

interface Props {
    title: string
    description: string
}

const TaskCard = (props: Props) => {

    const markdown = `***Title***
    > HEY
    `

    return (
        <div className="bg-white dark:bg-gray-800 min-w-min max-w-md px-3 py-3 rounded-sm" >
            <h1 className="text-2xl font-bold" >{props.title}</h1>
            <div className="py-3" >

                <p className="text-2xl font-semibold" >{props.title}</p>
                {/* <h3>Create to do list</h3> */}
                {/* <ReactMarkdown children={markdown} /> */}
            </div>
        </div>
    )
}

export default TaskCard