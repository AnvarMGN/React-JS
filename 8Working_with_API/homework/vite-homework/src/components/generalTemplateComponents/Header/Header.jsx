import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className="header center">
            <Link to='/' className="header_link" >
                <img className="logo" src="img/logo_header.png" alt="logo" />
                <h3 className="header_brand">BRAN
                    <span className="header_brand_bran_d">D</span>
                </h3>
            </Link>
            {/* <a href="index.html" className="header_link">
                <img className="logo" src="img/logo_header.png" alt="logo" />
                <h3 className="header_brand">BRAN
                    <span className="header_brand_bran_d">D</span>
                </h3>
            </a> */}
            <form action="#" className="header_form">
                <details className="filter">
                    <summary className="filter__summary">
                        <span className="filter__heading">Browse</span>
                        <i className="fa fa-caret-down"></i>
                    </summary>
                    <div className="filter__box">
                        <div className="box-item">
                            <h3 className="menu-title">women</h3>
                            <a href="" className="box-link">Dresses</a>
                            <a href="" className="box-link">Tops</a>
                            <a href="" className="box-link">Sweaters/Knits</a>
                            <a href="" className="box-link">Jackets/Coats</a>
                            <a href="" className="box-link">Blazers</a>
                            <a href="" className="box-link">Denim</a>
                            <a href="" className="box-link">Leggings/Pants</a>
                            <a href="" className="box-link">Skirts/Shorts</a>
                            <a href="" className="box-link">Accessories</a>
                        </div>
                        <div className="box-item">
                            <h3 className="menu-title">man</h3>
                            <a href="" className="box-link">Dresses</a>
                            <a href="" className="box-link">Tops</a>
                            <a href="" className="box-link">Sweaters/Knits</a>
                            <a href="" className="box-link">Jackets/Coats</a>
                        </div>
                    </div>
                </details>
                <input id="inputHeader_index.html" className="header_form_input" type="text" placeholder="      Search for Item..." />
                <a className="header_form_search" href="#">
                    <i className="fas fa-search"></i>
                </a>
            </form>
            <div className="header_left">
                <details className="cart">
                    <summary className="cart__icon">
                        <img className="header_shopping_cart" src="img/shopping_cart_header.png" alt="shopping cart" />
                    </summary>
                    <div id="iconcart" className="cart__box">
                        <div className="cart__item">
                            <div className="cart_skin">
                                <img src="img/cart_skin1.png" alt="skin product" />
                            </div>
                            <div className="cart__description">
                                <h3 className="cart__name">
                                    Rebox Zane
                                </h3>
                                <div className="cart__star">
                                    <img src="img/cart_star.png" alt="cart star" />
                                </div>
                                <p className="cart__price">
                                    1 x $250
                                </p>
                            </div>
                            <div className="cart__del">
                                <img src="img/cart_del.png" alt="delete" />
                            </div>
                        </div>
                        <div className="cart__item">
                            <div className="cart_skin">
                                <img src="img/cart_skin2.png" alt="skin product" />
                            </div>
                            <div className="cart__description">
                                <h3 className="cart__name">
                                    Rebox Zane
                                </h3>
                                <div className="cart__star">
                                    <img src="img/cart_star.png" alt="cart star" />
                                </div>
                                <p className="cart__price">
                                    1 x $250
                                </p>
                            </div>
                            <div className="cart__del">
                                <img src="img/cart_del.png" alt="delete" />
                            </div>
                        </div>
                        <div className="cart__total">
                            <p>TOTAL</p>
                            <p>$500.00</p>
                        </div>
                        <Link to="/checkout" className="cart__checkout">
                            Checkout
                        </Link>
                        <Link to="/cart" className="cart__toCart">
                            Go to cart
                        </Link>
                    </div>
                </details>
                <a href="#" className="header_my_account">My Account
                    <i className="fas fa-caret-down"></i>
                </a>
            </div>
        </header>
    )
};
