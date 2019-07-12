import React, {Fragment, useState} from 'react';
import {Button, InputGroup, ListGroup,DropdownButton,Dropdown} from 'react-bootstrap';
import {Field, Form, Formik, withFormik} from 'formik';
import * as Yup from 'yup';

let id = 1;

const Home = props => {
    const [key, setKey] = useState([]);
    const [toDoItem, setToDoItem] = useState([]);
    const addItem = props => {
        const nextKeys = key.concat({code: id++, item: props.toDo});
        setKey(nextKeys);
        props.toDo = ' '
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
                onSubmit={(values, actions) => {
                    addItem(values);
                    actions.resetForm();
                }}
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
                            <div className="col-sm-12">
                                <InputGroup className="mb-3">
                                    <DropdownButton
                                        as={InputGroup.Prepend}
                                        variant="outline-secondary"
                                        title="Dropdown"
                                        id="input-group-dropdown-1"
                                    >
                                        <Dropdown.Item href="#">Action</Dropdown.Item>
                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                    </DropdownButton>
                                    <Field
                                        name="toDo"
                                        type="text"
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder={'todo Item'}
                                    />
                                    <InputGroup.Append>
                                        <button type="submit">Add</button>
                                    </InputGroup.Append>
                                </InputGroup>
                                {errors.toDo && touched.toDo ? (
                                    <span className="small text-danger bold">{errors.toDo}</span>
                                ) : null}
                            </div>
                        </label>
                    </Form>
                )}
            </Formik>
                <ListGroup>
                    {key && key.map((keyItem, keyIndex) => {
                        return (
                            <ListGroup.Item variant="primary" key={keyIndex}>{keyItem.item}{' '}<Button size="sm" variant="danger" onClick={() => {
                                removeItem(keyItem);
                            }}>Remove</Button></ListGroup.Item>)
                    })}
                </ListGroup>
        </Fragment>
    );
};

export default Home;
