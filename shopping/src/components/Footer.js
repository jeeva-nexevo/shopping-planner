import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            </div>
                            <div className="col-lg-6">
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                        <div class="col-lg-3 col-md-6 footer-links">
                    <h4 className="text_left">Useful Links</h4>
                    <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 footer-links">
                    <h4 className="text_left">Our Services</h4>
                    <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 footer-contact">
                    <h4>Contact Us</h4>
                    <p> A108 Adam Street <br /> New York, NY 535022<br /> United States <br /><br /> <strong>Phone:</strong> +1 5589 55488 55<br /> <strong>Email:</strong> info@example.com<br  /> </p>
                </div>
                <div class="col-lg-3 col-md-6 footer-info">
                    <h3>About DevVE</h3>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                    <div class="social-links mt-3"> <a href="#" class="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a> <a href="#" class="facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a> <a href="#" class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a> <a href="#" class="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a> </div>
                </div>
                        </div>
                        <div className="container">
                            <div className="copyright"> © Copyright <strong><span>Nexevo</span></strong>. All Rights Reserved
                            </div>
                            <div className="credits"> Designed by <a href="https://www.nexevo.in/">Nexevo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer;