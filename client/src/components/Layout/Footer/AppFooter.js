import React from 'react'

import './../../../styles/Login.css'

const AppFooter = () =>{
    return(
        <footer id="footer" className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">
                <ul className="nav p-3">
                    <li className="">
                        <small className="tiny">
                            &nbsp; Copyright LAKHEporD. All Rights reserved.
                            <a href="/termsofuse">Terms of use</a> &<a href="/privacy">Privacy</a>
                        </small>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default  AppFooter;