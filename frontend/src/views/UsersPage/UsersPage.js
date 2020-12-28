import React from 'react'
import UsersTable from '../../components/UsersTable/UsersTable'
import Header from '../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'

import "./usersPage.scss"
import { useSelector } from 'react-redux'
import Footer from '../../components/Footer/Footer'
export default function UsersPage() {

    const state = useSelector(state => state.users)
    console.log(state)

    return (
        <div className="container">
            <Header />
            <Navigation/>
            <UsersTable />
            <Footer/>
      </div>
    );
}
