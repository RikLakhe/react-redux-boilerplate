import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import ReactTable from 'react-table';
// import { Form, Formik, withFormik } from 'formik';
// import 'react-table/react-table.css';

const ListProducts = props => {
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
    // const columns = [
    //     {
    //         Header: () => t(`${childMenuCode}.code.label`),
    //         headerClassName: 'bold react-table-sortable-column',
    //         id: 'code',
    //         accessor: d => <div className="text-center">{d.code}</div>, // String-based value accessors!
    //         maxWidth: 200,
    //     },
    //     {
    //         Header: () => t(`${childMenuCode}.description.label`),
    //         headerClassName: 'bold react-table-sortable-column',
    //         accessor: 'description',
    //     },
    //     {
    //         Header: () => t(`${childMenuCode}.active.label`),
    //         headerClassName: 'bold',
    //         id: 'active',
    //         maxWidth: 100,
    //         sortable: false,
    //         show: selectedChild.isEditable,
    //         accessor: d => (
    //             <div className="text-center">
    //                 <input type="checkbox" checked={d.isActive} className={'text-center'} disabled />
    //             </div>
    //         ),
    //     },
    //     {
    //         Header: () => t(`${childMenuCode}.list.action.label`),
    //         headerClassName: 'text-center bold',
    //         id: 'actions',
    //         maxWidth: 100,
    //         sortable: false,
    //         show: selectedChild.isEditable,
    //         accessor: d => (
    //             <div className="text-center">
    //                 <Link to={`/globals/${childMenuCode}/${d.id}/edit`} className={'font-weight-light'}>
    //                     Edit
    //                 </Link>
    //             </div>
    //         ),
    //     },
    // ];
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

    return (
        <Fragment>
            gg list
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
            {/*    <ReactTable*/}
            {/*        manual*/}
            {/*        sortable*/}
            {/*        minRows={2}*/}
            {/*        defaultPageSize={10}*/}
            {/*        noDataText={'No data found.'}*/}
            {/*        columns={columns}*/}
            {/*        data={globalItems instanceof Array ? globalItems : []}*/}
            {/*        pages={Math.ceil(globalItemsPagination.total / globalItemsPagination.pageSize)}*/}
            {/*        page={page}*/}
            {/*        loading={globalItemsLoading}*/}
            {/*        onFetchData={handleTableChange}*/}
            {/*        resizable={false}*/}
            {/*    />*/}
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
