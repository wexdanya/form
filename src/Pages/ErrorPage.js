import React from 'react';
import {Link} from "react-router-dom"
const ErrorPage = () => {
    return (
        <section className="page_wraper">
            <h1 style={{fontSize:"70px"}}>404</h1>
            <p style={{fontSize:"30px",textTransform:"uppercase"}}>Page not found</p>
            <Link  className="errorPage_button" to="/">Return to home page</Link>
        </section>
    );
}

export default ErrorPage;
