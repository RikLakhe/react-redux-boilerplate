import React from 'react'
import styled from 'styled-components'

import './../../../styles/Login.css'

const FooterDiv = styled.footer`
    background-color:#a3a9aa;
    padding:0;
`;

const AppFooter = () =>{
    return(
        <FooterDiv id="footer" className="page-footer font-small blue w-100">
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
        </FooterDiv>
    )
}

export default  AppFooter;