import React from 'react'
import UsersTable from '../../components/UsersTable/UsersTable'
import Header from '../../components/Header/Header'
import "./usersPage.scss"
import Footer from '../../components/Footer/Footer'

export default function UsersPage() {

    return (
        <div className="usersPage__container">
            <Header />
            <UsersTable />
            <Footer/>
      </div>
    );
}
