import React from 'react'

import AppHeader from './../Header'
import AppFooter from './../Footer'
import AppSideNav from './../SideNav'

const MainLayout = (props) => {
    return (
        <section className="body-wrapper">
            <section className="body-main">
                <AppHeader {...props}/>
                <AppSideNav />
                {props.children}
                <AppFooter/>
            </section>
        </section>
    )
}

export default MainLayout ;