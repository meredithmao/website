import React, {Component} from "react";
import {NavLink} from "react-router-dom";

// export default class Navigation extends Component {
//     render() {
//         return (
export const Navigation = () => (
            <div className="header">
                <div className="header-division container">
                    <NavLink to="../home" className="logo"> Meredith Mao</NavLink>
                </div>
                <nav id="menu" className="main-nav">
                    <div className="main-nav container">
                        <ul className="main-nav-list">
                            <li className="main-nav-item">
                                <NavLink to="../beauty" className="main-nav-link">Beauty</NavLink>
                            </li>
                            <li className="main-nav-item">
                                <NavLink to="../fashion" className="main-nav-link">Fashion</NavLink>
                            </li>
                            <li className="main-nav-item">
                                <NavLink to="../tech" className="main-nav-link">Tech</NavLink>
                            </li>
                            <li className="main-nav-item">
                                <NavLink to={"../recipes"} className="main-nav-link">Recipes</NavLink>
                            </li>
                            {/*<li className="main-nav-item">*/}
                            {/*    <a href={"lifestyle.html"} className="main-nav-link">Lifestyle</a>*/}
                            {/*</li>*/}
                            <li className="main-nav-item">
                                <NavLink to="/contact" className="main-nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="social-container">
                    <ul className="social-list">
                        <li className="social-item">
                            <a href={"https://www.instagram.com/mereheartsyou/"} className="follow-link instagram"
                               target="_blank">
                                <img src={"Images/instagram.png"} alt="Instagram"
                                     width= "45" height= "45" border="0"/>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href={"https://twitter.com/meredithmao"} className="follow-link twitter" target="_blank">
                                <img src={"Images/twitter.png"} alt="Twitter"
                                     width="50" height="50" border="0" vertical-align= "bottom"/>
                            </a>
                        </li>
                        <li className="social-item">
                            <a href={"https://www.youtube.com/c/meredithmao"} className="follow-link youtube"
                               target="_blank">
                                <img src={"Images/youtube.png"} alt="Youtube"
                                     style={{width: "50px", height: "35px", border: "0", paddingBottom: "5px"}}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    // }
// }
