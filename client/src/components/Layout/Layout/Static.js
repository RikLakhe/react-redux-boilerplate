import React from 'react'

import AppHeader from './../Header'
import AppFooter from './../Footer'

const StaticLayout = (props) => {
    return (
        <section className="body-wrapper">
            <section className="body-main">
                <AppHeader {...props}/>
                {props.children}
                <AppFooter/>
            </section>
        </section>
    )
}

export default StaticLayout;