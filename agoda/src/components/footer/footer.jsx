import Container from "@material-ui/core/Container";
import "./footer.css"

export const Footer = () => {
    return (
        <div className="footer">
            <Container maxWidth={window.innerWidth < 700 ? "lg" : "md"}>
            <div className="bottom">
                <div className="contact">
                    <h4>Help</h4>
                    <div>Help center</div>
                    <div>FAQ's</div>
                    <div>Privacy policy</div>
                    <div>Cookie policy</div>
                    <div>Terms of use</div>
                </div>
                <div className="about">
                    <h4>About Us</h4>
                    <p>PointsMax</p>
                    <p>Press</p>
                    <p>Careers</p>
                    <p>Blog</p>
                </div>
                <div className="learn">
                    <h4>Destinations</h4>
                    <p>Countries/Territories</p>
                    <p>Cities</p>
                </div>
                <div className="category">
                    <h4>Partner with us</h4>
                    <p>YCS partner portal</p>
                    <p>Partner Hub</p>
                    <p>Advertise on Agoda</p>
                    <p>Affiliates</p>
                    <p>Connectivity partners</p>
                </div>
                <div className="category">
                    <h4>Get the app</h4>

                    <a style={{textDecoration: "none", color: "#555"}} rel="noreferrer" href="https://apps.apple.com/us/app/agoda-best-travel-deals/id440676901" target="_blank">IOS app</a>

                    <a style={{textDecoration: "none", color: "#555"}} rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.agoda.mobile.consumer&hl=en_IN&gl=US" target="_blank">Android app</a>
                </div>
            </div>
            </Container>
            <div className="copyrightFooter">
            <p>👉 @ All material herein © 2005–2022 Agoda Company Pte. Ltd. All Rights Reserved.✌</p>
            <p>Agoda is part of Booking Holdings Inc., the world leader in online travel & related services.</p>
            <div className="footerlogos">
                <div>
                    <img className="header_logo" src="https://cdn5.agoda.net/ycs/dist/images/agoda-logo-2OYtJ.png" alt="logo" />
                </div>
                <div>
                    <img className="header_logo" src="https://logodix.com/logo/1643797.png" alt="pricelinelogo" />
                </div>
                <div>
                    <img className="header_logo" src="https://www.nicepng.com/png/detail/49-497410_kayak-logo-png-vector-free-download-kayak.png" alt="kayaklogo" />
                </div>
                <div>
                    <img className="header_logo" src="http://assets.stickpng.com/images/5a2ae8b7db68181c8f184d78.png" alt="rentalcarslogo" />
                </div>
                <div>
                    <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2020/08/Booking-Com-Logo-2006.png" alt="bookinglogo"/>
                </div>
                <div>
                    <img className="header_logo" src="https://seekvectorlogo.com/wp-content/uploads/2018/01/opentable-vector-logo.png" alt="opentablelogo"/>
                </div>
            </div>

           </div>
        </div>
    )
}