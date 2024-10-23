import { Breadcrumbs } from "../generalTemplateComponents/Breadcrumbs/Breadcrumbs";
import { Footer } from "../generalTemplateComponents/Footer/Footer";
import { Header } from "../generalTemplateComponents/Header/Header";
import { Navigation } from "../generalTemplateComponents/Navigation/Navigation";
import { Subscribe } from "../generalTemplateComponents/Subscribe/Subscribe";

export const SinglePage = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <Breadcrumbs />

            <div className="productcover">
                <a href="#" className="productcover__arrow"><i className="fas fa-angle-left"></i></a>
                <div className="carousel">
                    <img src="img/single_page_productcover.png" alt="skin" className="productcover__image" />
                </div>
                <a href="#" className="productcover__arrow"><i className="fas fa-angle-right"></i></a>
            </div>

            <section className="productcontent center">
                <div className="contentbox">
                    <div className="boxtop">
                        <h2 className="boxtop__header">WOMEN COLLECTION</h2>
                        {/* <!-- красная черта --> */}
                        <h1 className="boxtop__heading">Moschino Cheap And Chic</h1>
                        <p className="boxtop__text">Compellingly actualize fully researched processes before proactive outsourcing.
                            Progressively syndicate collaborative architectures before cutting-edge services. Completely
                            visualize parallel core competencies rather than exceptional portals.</p>
                        <div className="boxdesc">
                            <div className="boxtop__left">MATERIAL: <span className="boxtop__cotton">COTTON</span></div>
                            <div className="boxtop__right">DESIGNER: <span className="boxtop__designer">BINBURHAN</span></div>
                        </div>
                        <h2 className="boxtop__price">$561</h2>
                        {/* <!-- нижняя линия --> */}
                    </div>
                    <div className="boxbottom">
                        {/* <!-- три чекбокса --> */}
                        <div className="boxbottom__box">
                            <div className="boxbottom__inside">
                                <h3 className="boxbottom__header">CHOOSE COLOR</h3>
                                <div className="boxbottom__sort">
                                    <div className="boxbottom__color"></div>
                                    <p className="boxbottom__text">Red</p>
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </div>
                            <div className="boxbottom__inside">
                                <h3 className="boxbottom__header">CHOOSE SIZE</h3>
                                <div className="boxbottom__sort">
                                    <p className="boxbottom__text">XXL</p>
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </div>
                            <div className="boxbottom__inside">
                                <h3 className="boxbottom__header">QUANTITY</h3>
                                <div className="boxbottom__sort">
                                    <p className="boxbottom__text">2</p>
                                </div>
                            </div>
                        </div>
                        <div className="buttonAdd">
                            <a href="#iconcart" className="buttonAdd__text">
                                <i className="fas fa-shopping-cart"></i>
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="items center">
                <div className="items__header">
                    <h3 className="items__headerblock">you may like also</h3>
                </div>
                <div className="items_display_flex">
                    <div className="items_block">
                        <a href="single_page.html" className="items_block_link">
                            <img className="items_block_img" src="img/jpg_items_1.jpg" alt="photo" />
                                <div className="items_block_text">
                                    <h5 className="items_block_item_title">MANGO PEOPLE T-SHIRT</h5>
                                    <p className="items_block_item_price">$52.00</p>
                                </div>
                        </a>
                        <div className="items_block_box">
                            <a href="#iconcart" className="items_block_box_add">
                                <img className="items_block_box_add_img" src="img/items_block_add_box.png" alt="add" />
                                    <p className="add-txt">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div className="items_block">
                        <a href="single_page.html" className="items_block_link">
                            <img className="items_block_img" src="img/jpg_items_2.jpg" alt="photo" />
                                <div className="items_block_text">
                                    <h5 className="items_block_item_title">MANGO PEOPLE T-SHIRT</h5>
                                    <p className="items_block_item_price">$52.00</p>
                                </div>
                        </a>
                        <div className="items_block_box">
                            <a href="#iconcart" className="items_block_box_add">
                                <img className="items_block_box_add_img" src="img/items_block_add_box.png" alt="add" />
                                    <p className="add-txt">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div className="items_block">
                        <a href="single_page.html" className="items_block_link">
                            <img className="items_block_img" src="img/jpg_items_3.jpg" alt="photo" />
                                <div className="items_block_text">
                                    <h5 className="items_block_item_title">MANGO PEOPLE T-SHIRT</h5>
                                    <p className="items_block_item_price">$52.00</p>
                                </div>
                        </a>
                        <div className="items_block_box">
                            <a href="#iconcart" className="items_block_box_add">
                                <img className="items_block_box_add_img" src="img/items_block_add_box.png" alt="add" />
                                    <p className="add-txt">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                    <div className="items_block">
                        <a href="single_page.html" className="items_block_link">
                            <img className="items_block_img" src="img/jpg_items_4.png" alt="photo" />
                                <div className="items_block_text">
                                    <h5 className="items_block_item_title">MANGO PEOPLE T-SHIRT</h5>
                                    <p className="items_block_item_price">$52.00</p>
                                </div>
                        </a>
                        <div className="items_block_box">
                            <a href="#iconcart" className="items_block_box_add">
                                <img className="items_block_box_add_img" src="img/items_block_add_box.png" alt="add" />
                                    <p className="add-txt">Add to Cart</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Subscribe />
            <Footer />
        </div>
    )
};
