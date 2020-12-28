import React from 'react'
import Header from '../../components/Header/Header'
import UsersStats from '../../components/UsersStats/UsersStats'
import Footer from '../../components/Footer/Footer'
import { useLocation, useParams, useHistory } from 'react-router-dom'
export default function UsersStatsPage() {
    
    return (
        <div>
            <Header />
            <UsersStats />
            <Footer/>
        </div>
    )
}
