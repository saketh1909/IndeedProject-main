import {
    React, 
    Component
} from 'react';
import indeedLogo from './indeedLogo.svg';
import './CSS/NavbarAndFooter.css';
import {
    Link
} from 'react-router-dom';

class NavbarAndFooter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {

        let logStringPrefix = 'NavbarAndFooter.js | ';

        let navbar = null;
        let footer = null;

        console.log(logStringPrefix + 'Inside render method');

        navbar = (
            <div id="navbar-box" className="container-fluid">
            
                <div>
                    <img id="indeed-logo" alt="indeed-logo" src={indeedLogo} width="108" height="40"></img>

                    <div id="navbar-after-logo">
                        <div id="navbar-after-logo-links">
                            <div id="navbar-after-logo-links-box">
                                <Link className="navbar-links" to="/company_reviews">Find jobs</Link>
                                <Link className="navbar-links" to="/company_reviews_tab">Company reviews</Link>
                                <Link className="navbar-links" to="/find_salaries">Find salaries</Link>
                            </div>
                        </div>
                        <div id="navbar-after-logo-on-right">
                            <svg className="navbar-svg-icons" style={{width:"2.125em", height:"100%"}} viewBox="0 0 218 218" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M186.055 27.2253C188.552 27.2253 190.552 29.2497 190.552 31.7469V149.31C190.552 151.807 188.528 153.831 186.031 153.831H92.9662L62.9211 187.632C60.1652 190.732 55.038 188.795 55.02 184.647L54.886 153.831H32.2951C29.7978 153.831 27.7734 151.807 27.7734 149.31V31.747C27.7734 29.2498 29.7236 27.2254 32.2209 27.2254L186.055 27.2253Z" fill="#2D2D2D"></path><path d="M59.6547 119.901C57.1575 119.901 55.1331 117.877 55.1331 115.379V106.336C55.1331 103.839 57.1575 101.815 59.6547 101.815L123.769 101.815C126.266 101.815 128.29 103.839 128.29 106.336V115.379C128.29 117.877 126.266 119.901 123.769 119.901H59.6547Z" fill="white"></path><path d="M59.6547 83.728C57.1575 83.728 55.1331 81.7036 55.1331 79.2064V70.1631C55.1331 67.6659 57.1575 65.6415 59.6547 65.6415L150.968 65.6415C153.465 65.6415 155.49 67.6659 155.49 70.1631V79.2064C155.49 81.7036 153.465 83.728 150.968 83.728H59.6547Z" fill="white"></path></g><defs><clipPath id="clip0"><rect width="217.038" height="217.038" fill="white" transform="translate(0.643799 0.095459)"></rect></clipPath></defs></svg>
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}

                            <svg className="navbar-svg-icons" xmlns="http://www.w3.org/2000/svg" style={{width:"2.125em", height:"100%"}} focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a1.5 1.5 0 00-1.5 1.5v.161A7.003 7.003 0 005 10.5V16l-1.854 1.854a.5.5 0 00-.146.353v.293a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-.293a.5.5 0 00-.146-.353L19 16v-5.5a7.003 7.003 0 00-5.5-6.839V3.5A1.5 1.5 0 0012 2zm0 20a3.001 3.001 0 01-2.83-2h5.66A3.001 3.001 0 0112 22z"></path></svg>
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}


                            <svg className="navbar-svg-icons" xmlns="http://www.w3.org/2000/svg" style={{width:"2.125em", height:"100%"}} focusable="false" role="img" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12c2.486 0 4.5-2.014 4.5-4.5S14.486 3 12 3a4.499 4.499 0 00-4.5 4.5C7.5 9.986 9.514 12 12 12zm0 2.25c-3.004 0-9 1.508-9 4.5v1.75a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-1.75c0-2.992-5.996-4.5-9-4.5z"></path></svg>
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}

                            <span style={{marginTop: "-10px", padding: "10px 20px 10px 20px", borderLeft: "1px solid #C6C6C6"}}>Employers / Post Job</span>

                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <div>
                {navbar}
                {footer}
            </div>
        ); 
    }
}

export default NavbarAndFooter;