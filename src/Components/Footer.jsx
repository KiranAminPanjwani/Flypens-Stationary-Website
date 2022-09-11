import React from "react";

function Footer() {
    return (<>
        <div style={{
            backgroundImage: `url("/images/footershop3.jpg")`
        }} className="footermain">
            <div className="row ft">
                <div className="col col1">
                    <img src="./images/shopName.png" alt="" />
                    <div className="row footericons">
                        <img src="https://img.icons8.com/fluency-systems-filled/48/000000/facebook-new.png" />
                        <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v1.png" />
                        <img src="https://img.icons8.com/ios-filled/50/000000/twitter-circled--v1.png" />
                        <img src="https://img.icons8.com/ios-filled/50/000000/youtube-music.png" />
                    </div>
                </div>
                <div className="col col2 ">
                    <h5>Categories</h5>
                    <ui>
                        <li>Home</li>
                        <li>TSC Journals</li>
                        <li>Art Supplies</li>
                        <li>Office Supplies</li>
                        <li>Schhol Supplies</li>
                        <li>Craft Supplies</li>
                        <li>Toys and Games</li>
                    </ui>
                </div>
                <div className="col col3">
                    <h5>Support</h5>
                    <ui>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Downloads</li>
                        <li>Shop Location</li>
                        <li>Partners</li>
                        <li>Help</li>
                    </ui>
                </div>
                <div className="col col4">
                    <h5>Stay up to date on the latest from Flypen Stationary Shop</h5>
                    <div className="emailInput">
                        <input type="email" placeholder="Enter your e-mail address" />
                    </div>
                    <button>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default Footer;