import React, {Fragment} from 'react'

import "./index.css"

import AppHeader from './../Header'
import AppFooter from './../Footer'
import AppSideNav from './../SideNav'

const MainLayout = (props) => {
    return (
        <Fragment>
            <AppHeader {...props}/>

            <div className="container-fluid">
                <section className="row h-100">
                    <AppSideNav/>
                    <main className={"col-11 p-3"}>{props.children}</main>
                </section>
            </div>

            <AppFooter/>
        </Fragment>
    )
}

export default MainLayout;