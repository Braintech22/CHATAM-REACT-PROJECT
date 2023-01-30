import React from 'react'
import photo from "./jimmy.png"
import "./Home.css"

const Home = () => {
    return ( <
        div className = 'home' >
        <
        div className = "profilepics" >
        <
        img width = { 500 }
        height = { 700 }
        src = { photo }
        alt = "profile pics" / >
        <
        /div>

        <
        div className = "detailpage" >
        <
        div className = "head_home" >
        <
        h1 > Who i am < /h1> < /
        div > <
        div className = "main-home" >
        <
        h2 > Lorem ipsum dolor sit amet consectetur, adipisicing elit.Architecto quos quas cupiditate recusandae, ipsum odio nostrum fuga totam perspiciatis quo, assumenda eveniet rem voluptas!Aliquam similique corrupti ducimus quibusdam eligendi. < /h2> < /
        div > <
        /div>


        <
        /div>
    )
}

export default Home