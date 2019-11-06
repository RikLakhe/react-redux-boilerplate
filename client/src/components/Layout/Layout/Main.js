import React, {Fragment} from 'react'
import styled from 'styled-components'

import "./index.css"

import AppHeader from './../Header'
import AppFooter from './../Footer'
import AppSideNav from './../SideNav'

const MainDiv = styled.main`
    padding:0;
`;

const MainLayout = (props) => {
    return (
        <Fragment>
            <AppHeader {...props}/>

            <div className="container-fluid">
                <section className="row h-100">
                    <AppSideNav/>
                    <MainDiv className={"col-11"}>
                        {props.children}

                    </MainDiv>
                    <AppFooter/>
                </section>
            </div>
        </Fragment>
    )
}

export default MainLayout;