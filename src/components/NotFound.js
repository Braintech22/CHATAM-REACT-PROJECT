import React from 'react'
import { Link } from 'react-router-dom'


import './NotFound.css'

const NotFound = () => {
    return ( <
        div className = 'notfound' >
        <
        h1 > Page Not Found < /h1> <
        h2 > The page you load is not available < /h2> <
        h3 >
        please
        return to < Link to = "/" > Home < /Link> < /
            h3 > <
            /div>
    )
}

export default NotFound