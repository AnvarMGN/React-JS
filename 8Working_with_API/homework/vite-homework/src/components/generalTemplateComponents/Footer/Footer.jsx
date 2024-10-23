import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <section className="top center">
                <article className="top_about_brand display_flex">
                    <div className="top_about_brand_logo">
                        <Link to='/' className="top_about_brand_link">
                            <img className="logo" src="img/logo_header.png" alt="logo" />
                            <h3 className="header_brand">BRAN
                                <span className="header_brand_bran_d">D</span>
                            </h3>
                        </Link>
                        {/* <a href="index.html" className="top_about_brand_link">
                            <img className="logo" src="img/logo_header.png" alt="logo" />
                            <h3 className="header_brand">BRAN
                                <span className="header_brand_bran_d">D</span>
                            </h3>
                        </a> */}
                    </div>
                    <p className="about_brand_text">
                        Objectively transition extensive data rather than cross functional solutions. Monotonectally
                        syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded
                        array of processes and cross-unit partnerships.
                    </p>
                    <p className="about_brand_text2">
                        Efficiently plagiarize 24/365 action items and focused infomediaries.
                        Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
                    </p>
                </article>
                <div className="top_links display_flex">
                    <h5 className="heading_footer">COMPANY</h5>
                    <Link to="/" className="footer_links">Home</Link>
                    <Link to="/product" className="footer_links">Shop</Link>
                    <a href="#" className="footer_links">About</a>
                    <a href="#" className="footer_links">How It Works</a>
                    <a href="#" className="footer_links">Contact</a>
                </div>
                <div className="top_links_information display_flex">
                    <h5 className="heading_footer">INFORMATION</h5>
                    <a href="#" className="footer_links">Tearms & Condition</a>
                    <a href="#" className="footer_links">Privacy Policy</a>
                    <a href="#" className="footer_links">How to Buy</a>
                    <a href="#" className="footer_links">How to Sell</a>
                    <a href="#" className="footer_links">Promotion</a>
                </div>
                <div className="top_links_shop_category display_flex">
                    <h5 className="heading_footer">SHOP CATEGORY</h5>
                    <Link to="/product" className="footer_links">Men</Link>
                    <Link to="/product" className="footer_links">Women</Link>
                    <Link to="/product" className="footer_links">Child</Link>
                    <Link to="/product" className="footer_links">Apparel</Link>
                    <Link to="/product" className="footer_links">Brows All</Link>
                </div>
            </section>
            <nav className="bottom center">
                <p className="bottom_rights">© 2017 Brand All Rights Reserved.</p>
                <div className="bottom_icon">
                    <a href="https://www.facebook.com" className="bottom_icon_block">
                        <i className="fab fa-brands fa-facebook-f"></i>
                        {/* <!-- <img src="img/icon_facebook.png" alt=""/> --> */}
                    </a>
                    <a href="https://twitter.com" className="bottom_icon_block">
                        <i className="fab fa-brands fa-twitter"></i>
                        {/* <!-- <img src="img/icon_twitter.png" alt=""> --> */}
                    </a>
                    <a href="https://www.linkedin.com" className="bottom_icon_block">
                        <i className="fab fa-brands fa-linkedin-in"></i>
                        {/* <!-- <img src="img/icon_linkedin_in.png" alt=""> --> */}
                    </a>
                    <a href="https://ru.pinterest.com" className="bottom_icon_block">
                        <i className="fab fa-brands fa-pinterest-p"></i>
                        {/* <!-- <img src="img/icon_pinterest.png" alt=""> --> */}
                    </a>
                    <a href="https://google.com" className="bottom_icon_block">
                        <i className="fab fa-brands fa-google-plus-g"></i>
                        {/* <!-- <img src="img/icon_google_plus.png" alt=""> --> */}
                    </a>
                </div>
            </nav>
        </footer>
    )
};
