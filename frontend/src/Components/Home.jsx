import React from 'react'
import './Home.css'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="mainContainer">
                <div className={'titleContainer'}>
                <img src="images/mainpage.jpg" alt=""  className='w-96'/>
                    <div>Welcome!</div>
                </div>
            </div>
        </>
    )
}
export default Home
