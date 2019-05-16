import React, {useContext, useState} from 'react';
import {InputGroup,FormControl} from 'react-bootstrap'

import {AuthContext} from '../Context/AuthContext';

const useLoginForm = props => {
    const {login} = useContext(AuthContext);

    return (
        <main className=" pt-5 mt-5">
            <div className="container login-form">
                <div className="row justify-content-md-center ">
                    <h4>Login Form</h4>
                </div>
                <div className="row justify-content-md-center ">
                    <InputGroup size="lg">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">Username: </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                </div>
                <div className="row justify-content-md-center mt-4">
                    <InputGroup size="lg">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">Password:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type={"password"} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                </div>
                <div className="row justify-content-md-center ">
                    <button className={"btn btn-primary mt-5"} onClick={() => {
                        login();
                        // props.history.push('/home');
                    }}>Click to login
                    </button>
                </div>
            </div>
        </main>
    )
}

export default useLoginForm;