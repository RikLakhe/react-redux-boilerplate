import React, {useContext, useState} from 'react';
import {InputGroup, FormControl, Alert} from 'react-bootstrap'
import {Field, Form, Formik, withFormik} from 'formik';
import * as Yup from 'yup';

import { isEmpty } from '../../utils/commonUtil';
import {AuthContext} from '../Context/AuthContext';

const useLoginForm = props => {
    const {login} = useContext(AuthContext);
    const [errorResponse, setErrorResponse] = useState(null)
    return (
        <main className=" pt-5 mt-5">
            <div className="container login-form">
                {!isEmpty(errorResponse) && <Alert variant="danger" width={"100%"}>{errorResponse.message}</Alert>}
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().required('Username is required'),
                        password: Yup.string().required('Password is required'),
                    })}
                    onSubmit={values => {
                        login(values)
                            .then(response => {
                                props.history.push('/home');
                            })
                            .catch(error => {
                                setErrorResponse(error.response.data);
                            });
                    }}
                >
                    {({errors, touched, values}) => (
                        <Form style={{width: '100%'}}>
                            <div className="row justify-content-md-center ">

                                <InputGroup size="lg">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-lg">Username: </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Field
                                        name="username"
                                        placeholder={'Usename'}
                                        className="form-control"
                                    />
                                </InputGroup>
                                {errors.username && touched.username ?
                                    <span className="small text-danger bold">{errors.username}</span> : null}
                            </div>
                            <div className="row justify-content-md-center mt-4">
                                <InputGroup size="lg">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-lg">Password:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Field
                                        name="password"
                                        placeholder={'Password'}
                                        type="password"
                                        className="form-control"
                                    />
                                </InputGroup>
                                {errors.password && touched.password ?
                                    <span className="small text-danger bold">{errors.password}</span> : null}
                            </div>
                            <div className="row justify-content-md-center ">
                                <button className={"btn btn-primary mt-5"} type="submit">Click to login</button>
                            </div>
                        </Form>)}
                </Formik>
            </div>
        </main>
    )
}

export default useLoginForm;