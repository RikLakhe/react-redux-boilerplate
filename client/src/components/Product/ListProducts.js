import React, {Fragment, useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ReactTable from 'react-table';
// import { Form, Formik, withFormik } from 'formik';
import 'react-table/react-table.css';

const ListProducts = props => {
    const {
        products,
        productsErrors,
        productsLoading
    } = props;
    // const { childOpenKey, selectedChild } = useContext(MenuContext);
    // const { page, setPage } = useState(0);
    // let childMenuCode = explodeChildrenPath(childOpenKey);
    // const {
    //     handleSubmit,
    //     handleChange,
    //     setFieldValue,
    //     globalItemsErrors,
    //     globalItemsLoading,
    //     globalItems,
    //     values,
    //     globalItemsPagination,
    // } = props;
    // const { t } = useTranslation();
    //
    const columns = [
        {
            Header: () => 'Product ID',
            headerClassName: 'bold react-table-sortable-column',
            id: 'product_id',
            sortable: false,
            accessor: d => <div className="text-center">{d.product_id}</div>,
        }, {
            Header: () => 'Product Name',
            id: 'product_name',
            headerClassName: 'bold react-table-sortable-column',
            sortable: false,
            width:120,
            accessor: d => <div className="text-center">{d.product_name}</div>,
        }, {
            Header: () => 'Price',
            id: 'price',
            headerClassName: 'bold react-table-sortable-column',
            sortable: false,
            width:120,
            accessor: d => <div className="text-center">{d.price}</div>,
        }, {
            Header: () => 'Product Age',
            id: 'age',
            headerClassName: 'bold react-table-sortable-column',
            sortable: false,
            width:100,
            accessor: d => <div className="text-center">{d.age}</div>,
        }, {
            Header: () => 'Product Company',
            id: 'company',
            headerClassName: 'bold react-table-sortable-column',
            sortable: false,
            accessor: d => <div className="text-center">{d.company}</div>,
        }, {
            Header: () => 'Product Email',
            id: 'email',
            headerClassName: 'bold react-table-sortable-column',
            sortable: false,
            accessor: d => <div className="text-center">{d.email}</div>,

        }, {
            Header: () =>'Action',
            headerClassName: 'bold react-table-sortable-column',
            id: 'action',
            width:120,
            accessor: d => (
                <div className="text-center">
                    <Link to={`/products/${d.product_id}/edit`} className="btn btn-sm btn-link p-0">
                        Edit
                    </Link>
                    /
                    <Link to={`/products/${d.product_id}`} className="btn btn-sm btn-link p-0">
                        View
                    </Link>
                    /
                    <Link to={`/products/`} className="btn btn-sm btn-link p-0">
                        Delete
                    </Link>
                </div>
            ),
            sortable: false,
        },
    ];
    //
    // const handleTableChange = (state, instance) => {
    //     props.fetchGlobalWithCriteria(selectedChild.masterType, {
    //         masterType: selectedChild.masterType || 'ID',
    //         sortBy: !isEmpty(state.sorted[0]) ? state.sorted[0].id : null,
    //         sortParameter: !isEmpty(state.sorted[0]) ? (state.sorted[0].desc === false ? 'asc' : 'desc') : 'asc',
    //         pageSize: state.pageSize,
    //         pageNumber: state.page + 1,
    //     });
    // };
    //
    // useEffect(() => {
    //     props.resetForm();
    //     values.searchParameter = '';
    //     setFieldValue('masterType', selectedChild.masterType);
    //     props.fetchGlobalWithCriteria(selectedChild.masterType, {
    //         masterType: selectedChild.masterType,
    //     });
    //     return () => {
    //         props.resetForm();
    //         values.searchParameter = '';
    //     };
    // }, [childMenuCode, selectedChild]);

    useEffect(() => {
        props.fetchProducts();
    }, [])

    return (
        <Fragment>
            {/*<div className="py-4">*/}
            {/*    <Message error={globalItemsErrors} />*/}
            {/*    <div className="row mb-3 align-items-center">*/}
            {/*        <div className="col-md-6">*/}
            {/*            <h2 className="h4 bold mb-0">{t(`${childMenuCode}.list.title`)}</h2>*/}
            {/*        </div>*/}
            {/*        <div className={selectedChild.isEditable ? 'col-md-4' : 'col-md-6'}>*/}
            {/*            <Formik onSubmit={handleSubmit}>*/}
            {/*                <Form className="d-flex border rounded">*/}
            {/*                    <input*/}
            {/*                        name="searchParameter"*/}
            {/*                        onChange={handleChange}*/}
            {/*                        value={values.searchParameter}*/}
            {/*                        type="text"*/}
            {/*                        placeholder={t(`${childMenuCode}.list.filter.placeholder`)}*/}
            {/*                        className="border-0 form-control"*/}
            {/*                    />*/}
            {/*                    <button className="btn btn-link btn-inner">*/}
            {/*                        <i className="icon ion-md-search" />*/}
            {/*                    </button>*/}
            {/*                </Form>*/}
            {/*            </Formik>*/}
            {/*        </div>*/}
            {/*        {selectedChild.isEditable ? (*/}
            {/*            <div className="col-md-2">*/}
            {/*                <Link to={`/globals/${childMenuCode}/add`} className="btn btn-block btn-outline-success">*/}
            {/*                    <i className="icon ion-md-add" /> {t('add.button.label')}*/}
            {/*                </Link>*/}
            {/*            </div>*/}
            {/*        ) : null}*/}
            {/*    </div>*/}
            <ReactTable
                // manual
                sortable
                minRows={2}
                defaultPageSize={10}
                noDataText={'No data found.'}
                columns={columns}
                data={products instanceof Array ? products : []}
                // pages={Math.ceil(globalItemsPagination.total / globalItemsPagination.pageSize)}
                // page={page}
                loading={productsLoading}
                // onFetchData={handleTableChange}
                resizable={false}
            />
            {/*</div>*/}
        </Fragment>
    );
};

// export default withFormik({
//     enableReinitialize: true,
//     handleSubmit: (values, { props }) => {
//         props.fetchGlobalWithCriteria(values.masterType, {
//             masterType: values.masterType,
//             searchParameter: values.searchParameter,
//         });
//     },
//     mapPropsToValues: props => ({
//         masterType: 'id-types',
//         searchParameter: '',
//     }),
//     displayName: 'List',
// })(List);

export default ListProducts;
