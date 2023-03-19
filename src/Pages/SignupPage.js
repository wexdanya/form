import React from 'react';
import RegisterForm from './../components/forms/RegisterForm/index';

const SignupPage = () => {
    return (
        <section className="page_wraper">
            <h1>CREATE AN ACCOUNT</h1>
            <p>We always keep your name and email address private.</p>
            <RegisterForm/>
        </section>
    );
}

export default SignupPage;
