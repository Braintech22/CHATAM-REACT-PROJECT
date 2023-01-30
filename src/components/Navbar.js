import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';

const Navbar = () => {
    return ( <
        >
        <
        nav >

        <
        IconButton variant = "contained"
        color = "success"
        size = "large" >
        <
        AccountCircleIcon fontSize = '40' / >
        <
        /IconButton>

        <
        ul >
        <
        li > < Link className = 'links'
        to = "/" > Home < /Link></li >
        <
        li > < Link className = 'links'
        to = "/about" > About < /Link></li >
        <
        li > < Link className = 'links'
        to = "/contact" > Contact < /Link></li >

        <
        /ul>


        <
        IconButton variant = "contained"
        color = "success"
        size = "large" >
        <
        ForumIcon / >
        <
        /IconButton>

        <
        /nav>

        <
        />

    )
}

export default Navbar