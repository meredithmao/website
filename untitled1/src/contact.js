import React, {Component} from "react";

export const Contact = () => (
            <div>
                <div className="contact-form-containers">
                    <h2 className="contact-title"> Contact Me </h2>
                    <form action="https://www.google.com" method="post">
                        <div className="form-field name">
                            <label> Name: </label>
                            <input type="text" id="name" name="name" size="25" required="required"/>
                        </div>

                        <div className="form-field email">
                            <label> Email: </label>
                            <input type="email" id="email" name="email" size="25" required="required"/>
                        </div>
                        <div className="form-message">
                            <label> Message: </label>
                            <textarea name="message" required="required" rows="5"> Enter your message! </textarea>
                        </div>
                        <input type="submit" id="submit_button" name="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        )
