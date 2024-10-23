
import { Footer } from "../generalTemplateComponents/Footer/Footer";
import { Header } from "../generalTemplateComponents/Header/Header";
import { Navigation } from "../generalTemplateComponents/Navigation/Navigation";
import { Subscribe } from "../generalTemplateComponents/Subscribe/Subscribe";
import { ProductList } from "../reduxComponents/ProductList.jsx/ProductList";

export const HomePage = () => {
    return (
        <div>
            <Header />
            <Navigation />

            <div className="main center">
                <div className="main_block">
                    <div className="main_block_title">
                        <h1 className="main_block_title_header">THE BRAND</h1>
                        <h3 className="main_block_title_luxerious">
                            OF LUXERIOUS
                            <span className="fashion"> FASHION</span>
                        </h3>
                    </div>
                </div>
            </div>

            <section className="content center">
                <a href="#" className="content_men content__hover">
                    <img className="content__size" src="img/jpg_content_for_men.png" alt="photo" />
                    <div className="content_men_marker">
                        <div className="position">
                            <h5 className="position_text">HOT DEAL</h5>
                            <h3 className="position_text2">FOR MEN</h3>
                        </div>
                    </div>
                </a>
                <a href="#" className="content_women content__hover">
                    <img className="content__size" src="img/jpg_content_accesories.jpg" alt="photo" />
                    <div className="content_women_marker">
                        <div className="position">
                            <h5 className="position_text">30% OFFER</h5>
                            <h3 className="position_text2">WOMEN</h3>
                        </div>
                    </div>
                </a>
                <a href="#" className="content_assesories content__hover">
                    <img className="content__size" src="img/jpg_content_women.png" alt="photo" />
                    <div className="content_assesories_marker">
                        <div className="position accesories">
                            <h5 className="position_text">LUXIROUS & TRENDY</h5>
                            <h3 className="position_text2">ACCESORIES</h3>
                        </div>
                    </div>
                </a>
                <a href="#" className="content_kids content__hover">
                    <img className="content__size" src="img/jpg_content_for_kids.jpg" alt="photo" />
                    <div className="content_kids_marker">
                        <div className="position">
                            <h5 className="position_text">NEW ARRIVALS</h5>
                            <h3 className="position_text2">FOR KIDS</h3>
                        </div>
                    </div>
                </a>
            </section>

            <ProductList/>

            <section id="hotdeals" className="advantage center">
                <div className="advantage_content">
                    <img src="img/jpg_content_image.jpg" alt="photo" />
                    <div className="advantage_content_marker">
                        <h2 className="advantage_content_marker_offer">30%
                            <span className="offer">OFFER</span>
                        </h2>
                        <h3 className="advantage_content_marker_offer_women">FOR WOMEN</h3>
                    </div>
                </div>
                <div className="advantages">
                    <article className="advantages_grid">
                        <img className="advantages_grid_img" src="img/png_advantages_delivery.png" alt="" />
                        <h5 className="advantages_grid_heading">Free Delivery</h5>
                        <p className="advantages_grid_text">
                            Worldwide delivery on all. Authorit tively morph next-generation innov
                            tion with extensive models.
                        </p>
                    </article>
                    <article className="advantages_grid">
                        <img className="advantages_grid_img" src="img/png_advantages_sales.png" alt="" />
                        <h5 className="advantages_grid_heading">Sales & discounts</h5>
                        <p className="advantages_grid_text">
                            Worldwide delivery on all. Authorit tively morph next-generation innov
                            tion with extensive models.
                        </p>
                    </article>
                    <article className="advantages_grid">
                        <img className="advantages_grid_img" src="img/png_advantages_quality.png" alt="" />
                        <h5 className="advantages_grid_heading">Quality assurance</h5>
                        <p className="advantages_grid_text">
                            Worldwide delivery on all. Authorit tively morph next-generation innov
                            tion with extensive models.
                        </p>
                    </article>
                </div>
            </section>

            <Subscribe />
            <Footer />
        </div>
    )
};



