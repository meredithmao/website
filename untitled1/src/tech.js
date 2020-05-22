import React, {Component} from "react";

export const Tech = () => (
            <div className="tech-link-container">
                <h1> Tech Links </h1>
                <ul className="tech-list">
                    <li className="tech-socials">
                        <a href={"https://www.linkedin.com/in/meredithmao77/"} className="follow-link linkedin"
                           target="_blank">
                            <img src={"Images/linkedin.png"} alt="LinkedIn" style={{width: "45px", height: "45px", border: "0"}}/>
                        </a>
                    </li>
                    <li className="tech-socials">
                        <a href={"https://github.com/meredithmao"} className="follow-link github" target="_blank">
                            <img src={"Images/github.png"} alt="GitHub" style={{width: "45px", height: "45px", border: "0"}}/>
                        </a>
                    </li>
                </ul>
                <div className="resume-item">
                    <a href={"Resources/Resume%20Meredith_Mao.pdf"} className="resume" target="_blank"> Resume
                        <a href={"Resources/Resume%20Meredith_Mao.pdf"} className="download" target="_blank">
                            <img src={"Images/download.png"} alt="Download" style={{width: "20px", height: "20px", border: "0"}}/>
                        </a>
                    </a>
                </div>
            </div>
)