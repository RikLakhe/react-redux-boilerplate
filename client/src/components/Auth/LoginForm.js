import React, {useContext,useState} from 'react';

import {AuthContext} from '../Context/AuthContext';

const useLoginForm = props => {
    const { login } = useContext(AuthContext);

    return (
        <main className=" pt-5 mt-5">
            <div className="container">
                <div className="row justify-content-md-center ">
                    <h4>Login Form</h4>
                </div>
                <div className="row justify-content-md-center ">
                        Username: <input type={"text"}/>
                </div>
                 <div className="row justify-content-md-center ">
                        Password: <input type={"password"}/>
                </div>
                <div className="row justify-content-md-center ">
                    <button className={"btn-lg"} onClick={()=>{
                        login();
                        props.history.push('/home');
                    }}>Click to login</button>
                </div>
            </div>
        </main>
    )
}

export default useLoginForm;