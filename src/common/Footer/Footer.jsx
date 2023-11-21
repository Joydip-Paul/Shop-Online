import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer class="footer-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 pb-30">
                            <div class="footer-area__each">
                                <h3>Jhakanak</h3>
                                <p>
                                    Be the first to know about new collections, special events, and
                                    what’s going on at Our Place. We are creative
                                </p>
                                <a href="">Know more about us</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 pb-30">
                            <div class="footer-area__each">
                                <h3>Contact info</h3>
                                <ul>
                                    <li>
                                        <h4>CALL:</h4>
                                        <p><a href="">+8801236545478</a></p>
                                    </li>
                                    <li>
                                        <h4>WRITE:</h4>
                                        <p><a href="">your.email@here.com</a></p>
                                    </li>
                                    <li>
                                        <h4>FIND US:</h4>
                                        <p>Canada, Toronto, 31B</p>
                                    </li>
                                </ul>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 pb-30">
                            <div class="footer-area__each pr-0">
                                <h3>Gallery</h3>
                                <div class="gallery">
                                    <figure>
                                        <img src="https://media.wired.com/photos/6511aab1189c419c40374c92/4:3/w_1803,h_1352,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="https://media.wired.com/photos/64de7dca4a854832b16fd3c0/master/pass/Garmin-Epix-Pro-Gear.jpg" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOVLd7Q9KZcowtfKTUuHYy09TyjdHB_YTWP_BILp0Dceckjm8MCCME2bxE6oPvuNT69ww&usqp=CAU" alt="" />
                                    </figure>
                                    <figure>
                                        <img src="https://media.wired.com/photos/652559da5f11119fb77b3aa9/master/w_1600%2Cc_limit/Fitbit-Charge-6-Review-Gear.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="footer-area__bottom">
                        <p>&copy; 2023 Jhakanak. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
