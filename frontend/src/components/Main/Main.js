import React from 'react'
import MainList from '../MainList/MainList';
import  './main.scss'
export default function Main() {
    return (

        <main className="home">
          <h3 className="home__tittle">
            Why <strong>small business owners love</strong> AppCo?
          </h3>
          <p className="home__description">
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </p>
         <MainList/>
        </main>
 
    );
}
