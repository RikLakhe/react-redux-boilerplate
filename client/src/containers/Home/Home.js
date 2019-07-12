import React, {Fragment, useState} from 'react';
import {Button} from 'react-bootstrap';
import {Field, Form, Formik, withFormik} from 'formik';
import * as Yup from 'yup';

let id = 1;

const Home = props => {
    const {values, touched, errors, handleChange} = props;

    const [key, setKey] = useState([]);
    const [toDoItem, setToDoItem] = useState([]);
    const addItem = () => {
        const nextKeys = key.concat(id++);
        setKey(nextKeys);
    }

    const removeItem = (keyItem) => {
        let tempArray = key.filter(key => key !== keyItem);
        setKey(tempArray);
    }

    console.log('key', key);
    return (
        <Fragment>
            <h1>ToDo</h1>
            <Formik
                onSubmit={addItem}
                validationSchema={Yup.object().shape({
                    toDo: Yup.string()
                        .required('Item is required!'),
                })}
                initialValues={{
                    toDo: '',
                }}
            >
                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,
                  }) => (
                    <Form className="add-form">
                        <label className="form-group row align-items-center">
                            <div className="col-sm-8">
                                <Field
                                    name="toDo"
                                    type="text"
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder={'todo Item'}
                                />
                                {errors.toDo && touched.toDo ? (
                                    <span className="small text-danger bold">{errors.toDo}</span>
                                ) : null}
                                <button type="submit" className="btn btn-lg btn-primary">Add</button>
                            </div>
                        </label>
                    </Form>
                )}
            </Formik>
            <ul>
                {key.map((keyItem, keyIndex) => {
                    return (<li>{keyItem}{' '}<Button size="sm" variant="danger" onClick={() => {
                        removeItem(keyItem);
                    }}>Remove</Button></li>)
                })}
            </ul>
        </Fragment>
    );
};

export default Home;
