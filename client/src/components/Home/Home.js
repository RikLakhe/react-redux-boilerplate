import React, {Fragment, useState} from 'react';
import {InputGroup} from 'react-bootstrap';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components'

import Draggable from './Draggable'

let id = 0;

const TitleHeader = styled.h2`
    color:blue;
    font-size:50px;
`;

const Container = styled.div`
    background-color:#e3e3e8;
    min-height: 70vh;
`;

const Home = props => {

    const [key, setKey] = useState({});
    const [columns, setColumns] = useState({
        'column-1': {
            id: 'column-1', title: 'To Do', taskIds: [],
        },
        'column-2': {
            id: 'column-2', title: 'In Progress', taskIds: [],
        },
        'column-3': {
            id: 'column-3', title: 'Ready', taskIds: [],
        },
        'column-4': {
            id: 'column-4', title: 'Done', taskIds: [],
        }
    });
    const [columnOrder, setColumnOrder] = useState(['column-1', 'column-2', 'column-3', 'column-4']);

    const addItem = props => {
        let newKey = `task-${id++}`;
        const nextKeys = {
            ...key,
            [newKey]: {id: newKey, content: props.toDo}
        }
        setKey(nextKeys);

        const start = columns['column-1'];
        const newColumn = {
            ...start,
            taskIds: [
                ...start.taskIds,
                newKey
            ],
        };
        const newState = {
            columns: {
                ...columns,
                [newColumn.id]: newColumn,
            },
        };

        setColumns(newState.columns);
        props.toDo = ' '
    };

    const removeItem = (keyItem) => {
        let tempArray = key.filter(key => key !== keyItem);
        setKey(tempArray);
    };

    return (
        <Container>
            <TitleHeader>Dynamic Dashboard</TitleHeader>
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
                    status: '',
                }}
            >
                {({
                      handleChange,
                      touched,
                      errors,
                  }) => (
                    <Form className="add-form">
                        <label className="form-group row align-items-center">
                            <div className="col-sm-12">
                                <InputGroup className="mb-3">
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
            <Draggable tasks={key} columns={columns} setColumns={setColumns} columnOrder={columnOrder}/>
        </Container>
    );
};

export default Home;
