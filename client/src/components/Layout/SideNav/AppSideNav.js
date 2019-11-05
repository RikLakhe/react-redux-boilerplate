import React from 'react'
import {Link} from 'react-router-dom';

import './index.css';
import MenuList from '../../../constants/menuRoute'

const AppSideNav = () => {
    return (
        <aside id="sidenav" className={"col-md-1 bg-light border-right p-2"}>
            <ul className="ul-sidenav nav flex-column nav-pills nav-main">
                {
                    MenuList && MenuList.map((item, index) => (
                        <li className="nav-item">
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
            </ul>
        </aside>
    )
}

export default AppSideNav;