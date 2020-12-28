import React from 'react'
import Header from '../../components/Header/Header'
import UsersStats from '../../components/UsersStats/UsersStats'
import Footer from '../../components/Footer/Footer'
import "./usersStatsPage.scss"
export default function UsersStatsPage() {
    
    return (
        <div className="usersStatsPage__container">
            <Header />
            <UsersStats />
            <Footer/>
        </div>
    )
}
