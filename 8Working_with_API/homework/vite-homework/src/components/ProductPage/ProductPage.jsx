// import { Link } from "react-router-dom"
import { Footer } from "../generalTemplateComponents/Footer/Footer";
import { Header } from "../generalTemplateComponents/Header/Header";
import { Navigation } from "../generalTemplateComponents/Navigation/Navigation";
import { Subscribe } from "../generalTemplateComponents/Subscribe/Subscribe";
import { Breadcrumbs } from "../generalTemplateComponents/Breadcrumbs/Breadcrumbs";
import { useState } from "react";
import data from "../../data/dataProduct";
import { ProductPageCard } from "./ProductPageCard";


export const ProductPage = () => {
    const [changeSize, setChangeSize] = useState("");
    const [newData, setNewData] = useState([]);

    console.log(data);

    const handelChangeSize = (e) => {
        setChangeSize(e.target.value);

        const filterData = data.filter((product) => product.size.includes(changeSize));
        setNewData(filterData);

        console.log("size", changeSize);
        console.log("newArray", newData);
    };

    return (
        <div>
            <Header />
            <Navigation />
            <Breadcrumbs />

            <div className="product_content center">
                {/* <!-- sidebar --> */}

                <div className="product_content__details">
                    <details className="category">
                        <summary className="category__summary">
                            <span className="category__heading">Category</span>
                            <i className="fas fa-caret-down"></i>
                        </summary>
                        <div className="category__links-box">
                            <a href="#" className="category__link">Accessories</a>
                            <a href="#" className="category__link">Bags</a>
                            <a href="#" className="category__link">Denim</a>
                            <a href="#" className="category__link">Hoodies & Sweatshirts</a>
                            <a href="#" className="category__link">Jackets & Coats</a>
                            <a href="#" className="category__link">Pants</a>
                            <a href="#" className="category__link">Polos</a>
                            <a href="#" className="category__link">Shirts</a>
                            <a href="#" className="category__link">Shoes</a>
                            <a href="#" className="category__link">Shorts</a>
                            <a href="#" className="category__link">Sweaters & Knits</a>
                            <a href="#" className="category__link">T-Shirts</a>
                            <a href="#" className="category__link">Tanks</a>
                        </div>
                    </details>
                    <details className="category">
                        <summary className="category__summary">
                            <span className="category__heading">BRAND</span>
                            <i className="fas fa-caret-down"></i>
                        </summary>
                        <div className="category__links-box">
                            <a href="#" className="category__link">Accessories</a>
                            <a href="#" className="category__link">Bags</a>
                            <a href="#" className="category__link">Denim</a>
                            <a href="#" className="category__link">Hoodies & Sweatshirts</a>
                            <a href="#" className="category__link">Jackets & Coats</a>
                            <a href="#" className="category__link">Pants</a>
                            <a href="#" className="category__link">Polos</a>
                            <a href="#" className="category__link">Shirts</a>
                            <a href="#" className="category__link">Shoes</a>
                            <a href="#" className="category__link">Shorts</a>
                            <a href="#" className="category__link">Sweaters & Knits</a>
                            <a href="#" className="category__link">T-Shirts</a>
                            <a href="#" className="category__link">Tanks</a>
                        </div>
                    </details>
                    <details className="category">
                        <summary className="category__summary">
                            <span className="category__heading">DESIGNER</span>
                            <i className="fas fa-caret-down"></i>
                        </summary>
                        <nav className="category__links-box">
                            <a href="#" className="category__link">Accessories</a>
                            <a href="#" className="category__link">Bags</a>
                            <a href="#" className="category__link">Denim</a>
                            <a href="#" className="category__link">Hoodies & Sweatshirts</a>
                            <a href="#" className="category__link">Jackets & Coats</a>
                            <a href="#" className="category__link">Pants</a>
                            <a href="#" className="category__link">Polos</a>
                            <a href="#" className="category__link">Shirts</a>
                            <a href="#" className="category__link">Shoes</a>
                            <a href="#" className="category__link">Shorts</a>
                            <a href="#" className="category__link">Sweaters & Knits</a>
                            <a href="#" className="category__link">T-Shirts</a>
                            <a href="#" className="category__link">Tanks</a>
                        </nav>
                    </details>
                </div>

                <section className="items">

                    {/* <!-- top filter --> */}

                    <div className="top-filter">
                        <div className="top-box">
                            <div className="trending-now">
                                <h3 className="top-box__heading">Trending now</h3>
                                <ul className="trending-now">
                                    <li className="trending-now__li">
                                        <a href="#" className="trending-now__link">Bohemian</a>
                                    </li>
                                    <li className="trending-now__li">
                                        <a href="#" className="trending-now__link">Floral</a>
                                    </li>
                                    <li className="trending-now__li">
                                        <a href="#" className="trending-now__link">Lace</a>
                                    </li>
                                    <li className="trending-now__li">
                                        <a href="#" className="trending-now__link">Floral</a>
                                    </li>
                                    <li className="trending-now__li">
                                        <a href="#" className="trending-now__link">Lace</a>
                                    </li>
                                    <li className="trending-now__li">
                                        <a href="#" className="trending-now__link">Bohemian</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="size">
                                <h3 className="top-box__heading">Size</h3>
                                {/* <div className="size__sort-box">
                                    <div className="size__check">
                                        <input value="XXS" onChange={(e) => (handelChangeSize(e))} id="size__check1" type="checkbox" />
                                        <label htmlFor="#">xxs</label>
                                    </div>
                                    <div className="size__check">
                                        <input value="XS" onChange={(e) => (handelChangeSize(e))} id="size__check2" type="checkbox" />
                                        <label htmlFor="#">xs</label>
                                    </div>
                                    <div className="size__check">
                                        <input value="S" onChange={(e) => (handelChangeSize(e))} id="size__check3" type="checkbox" />
                                        <label htmlFor="#">s</label>
                                    </div>
                                    <div className="size__check">
                                        <input value="M" onChange={(e) => (handelChangeSize(e))} id="size__check4" type="checkbox" />
                                        <label htmlFor="#">m</label>
                                    </div>
                                    <div className="size__check">
                                        <input value="L" onChange={(e) => (handelChangeSize(e))} id="size__check5" type="checkbox" />
                                        <label htmlFor="#">l</label>
                                    </div>
                                    <div className="size__check">
                                        <input value="XL" onChange={(e) => (handelChangeSize(e))} id="size__check6" type="checkbox" />
                                        <label htmlFor="#">xl</label>
                                    </div>
                                    <div className="size__check">
                                        <input value="XXL" onChange={(e) => (handelChangeSize(e))} id="size__check7" type="checkbox" />
                                        <label htmlFor="#">xxl</label>
                                    </div>
                                </div> */}

                                <div className="size__sort-box">
                                    <select onChange={(e) => (handelChangeSize(e))} className="size__check">
                                        <option id="size__check1" value="">Выберите размер</option>
                                        <option value="XXS">XXS</option>
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                    </select>
                                </div>

                            </div>
                            <div className="price">
                                <h3 className="top-box__heading">PRICE</h3>
                                <div className="price__input">
                                    <input className="price__input_mod" min="0" max="400" step="10" type="range" />
                                </div>
                                <div className="price__text">
                                    <p>$52</p>
                                    <p>$400</p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-box">
                            <details className="sort-by">
                                <summary className="sort-by__summary">
                                    <span className="sort-by__text"> Sort By</span>
                                    <span className="sort-by__text1">Name</span>
                                    <svg className="sort-by__caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path
                                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                                    </svg>
                                </summary>
                                {/* <!-- <P class="sort-by__number">choose</P> --> */}
                            </details>
                            <details className="show">
                                <summary className="show__summary">
                                    <span className="show__text"> Show</span>
                                    <span className="show__text1">09</span>
                                    <svg className="show__caret-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path
                                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                                    </svg>
                                </summary>
                                {/* <!-- <P class="show__number">01</P> --> */}
                            </details>
                        </div>
                    </div>

                    <div className="items_display_flex">
                        {newData.length === 0 ? (<>
                            {data.map((goods) => (
                                <ProductPageCard key={goods.id} item={goods} />
                            ))}
                        </>) : (<>
                            {newData.map((goods) => (
                                <ProductPageCard key={goods.id} item={goods} />
                            ))}
                        </>)}
                    </div>

                    {/* <div className="items_display_flex">
                        <div className="items_block">
                            <Link to="/single_product" className="items_block_link" >
                                <img className="items_block_img" src="img/jpg_items_1.jpg" alt="photo" />
                                <div className="items_block_text">
                                    <h5 className="items_block_item_title">MANGO PEOPLE T-SHIRT</h5>
                                    <p className="items_block_item_price">$52.00</p>
                                </div>
                            </Link>
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
                    </div> */}

                    <nav className="pagination">
                        <ul className="pagination__ul">
                            <li className="pagination__li">
                                <a href="#" className="pagination__link">
                                    <i className="fas fa-angle-left arrow"></i>
                                </a>
                            </li>
                            <li className="pagination__li">
                                <a href="#" className="pagination__link">1</a>
                            </li>
                            <li className="pagination__li">
                                <a href="#" className="pagination__link">2</a>
                            </li>
                            <li className="pagination__li">
                                <a href="#" className="pagination__link">3</a>
                            </li>
                            <li className="pagination__li">
                                <a href="#" className="pagination__link">4</a>
                            </li>
                            <li className="pagination__li">
                                <a href="#" className="pagination__link">5</a>
                            </li>
                            <li className="pagination__li">
                                <a href="#" className="pagination__link">6.....20</a>
                            </li>
                            <li className="pagination__li">
                                <a href="#" className="pagination__link"><i className="fas fa-angle-right arrow"></i></a>
                            </li>
                        </ul>
                        <nav className="view">
                            <a href="#" className="view__link">View All</a>
                        </nav>
                    </nav>
                </section>

            </div>

            <Subscribe />
            <Footer />
        </div>
    )
}
