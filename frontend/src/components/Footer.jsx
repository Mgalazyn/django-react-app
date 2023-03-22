import React from "react";
import githubImg from "./images/github.png";
import linkedingImg from "./images/linkedin.png";
import twitterImg from "./images/twitter-sign.png";

function Footer() {
    return (
    <div className="over-footer">
        <div className="about-footer">
            <div className="footer-links">
                <div className="socialmedia1">
                    <p><a href="https://github.com/Mgalazyn"><img src={githubImg} alt="media"/></a></p>
                    <p><a href="https://www.linkedin.com/in/marcin-ga%C5%82a%C5%BCyn-52bb911a8/"><img src={linkedingImg} alt="media"/></a></p>
                    <p><a href="https://twitter.com/?lang=pl"><img src={twitterImg} alt="media"/></a></p>
                </div>
                <div className="footer-links-div1">
                    <h4> Working hours </h4>
                    <p><b>Monday - Friday</b> </p>
                    <p>7:00am - 21:00pm </p>
                    <p><b>Weekends </b></p>
                    <p>10am - 20pm</p>
                </div>
                <div className="footer-links-div1">
                    <h4> Contact </h4>
                    <a href="/contact">
                        <p>Contact </p>
                    </a>
                    <a href="/about">
                        <p>About </p>
                    </a>
                    <a href="/location">
                        <p>Location </p>
                    </a>
                </div>
            </div>
        </div>
    <hr></hr>
    <div className="below-footer">
        <div className="footer-copyrights">
            <p>
                @{new Date().getFullYear()} by Marcin Galazyn. All rights reserved
            </p>
        </div>
        <div className="footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions </p></div></a>
            <a href="/cookied"><div><p>Cookie Declaration</p></div></a>
        </div>
    </div>
    </div>
    
    )
}

export default Footer;