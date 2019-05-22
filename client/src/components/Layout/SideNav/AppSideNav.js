import React from 'react'

const AppSideNav = () =>{
    return(
        <aside id="sidenav" className={"col-md-2 bg-light border-right px-2"}>
            <ul className="nav flex-column nav-pills nav-main">
                <li className="nav-item">1 Item</li>
                <li className="nav-item">2 Item</li>
                <li className="nav-item">3 Item</li>
                <li className="nav-item">4 Item</li>
                <li className="nav-item">5 Item</li>
            </ul>
        </aside>
    )
}

export default  AppSideNav;