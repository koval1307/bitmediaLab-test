import React from 'react'
import MainList from '../MainList/MainList';
import  './main.scss'
export default function Main() {
    return (

        <main className="centered--text">
          <h3 className="centered--text">
            Why <strong>small business owners love</strong> AppCo?
          </h3>
          <p className="centered--text">
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </p>
         <MainList/>
        </main>
 
    );
}
