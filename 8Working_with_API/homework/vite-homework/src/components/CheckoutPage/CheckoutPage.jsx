import { Breadcrumbs } from "../generalTemplateComponents/Breadcrumbs/Breadcrumbs";
import { Footer } from "../generalTemplateComponents/Footer/Footer";
import { Header } from "../generalTemplateComponents/Header/Header";
import { Navigation } from "../generalTemplateComponents/Navigation/Navigation";
import { Subscribe } from "../generalTemplateComponents/Subscribe/Subscribe";

export const CheckoutPage = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <Breadcrumbs />

            <div className="form center">
                <ul className="form__ul">
                    <li className="form__li">
                        <details className="form__details" open>
                            <summary className="form__summary">01. Shipping Adress</summary>
                            <div className="form__flex">
                                {/* <!-- Доставка --> */}
                                <form action="#" className="form__shipping">
                                    <h3 className="form__heading">Check as a guest or register</h3>
                                    <p className="form__text">Register with us for future convenience</p>

                                    <div className="form__box-input">
                                        <input required type="checkbox" className="form__input" />
                                        <label htmlFor="#" className="form__label">checkout as guest</label>
                                    </div>
                                    <div className="form__box-input">
                                        <input required type="checkbox" className="form__input" />
                                        <label htmlFor="#" className="form__label">register</label>
                                    </div>

                                    <h3 className="form__heading">register and save time!</h3>
                                    <p className="form__text">Register with us for future convenience</p>

                                    <p className="form__text-link">
                                        <i className="fa-solid fa-angles-right"></i>
                                        <a href="#" className="form__link">Fast and easy checkout</a>
                                    </p>
                                    <p className="form__text-link">
                                        <i className="fa-solid fa-angles-right"></i>
                                        <a href="#" className="form__link">Easy access to your order history and status</a>
                                    </p>

                                    <button className="form__button" type="submit">Continue</button>
                                </form>
                                {/* <!-- Регистрация --> */}
                                <form action="#" className="form__registration">
                                    <h3 className="form__heading">Already registed?</h3>
                                    <p className="form__text">Please log in below</p>

                                    <div className="form__right-box-input">
                                        <label htmlFor="#" className="form__right-label">EMAIL ADDRESS<span
                                            className="form__symbol">*</span></label>
                                        <input autoFocus required type="email" className="form__right-input" />
                                    </div>
                                    <div className="form__right-box-input">
                                        <label htmlFor="#" className="form__right-label">PASSWORD<span
                                            className="form__symbol">*</span></label>
                                        <input required type="password" className="form__right-input" />
                                    </div>

                                    <p className="form__right-text">* Required Fileds</p>

                                    <div className="form__righ-button-box">

                                        <button className="form__button" type="submit">Log in</button>
                                        <a href="#" className="form__right-button-text">Forgot Password ?</a>
                                    </div>
                                </form>
                            </div>
                        </details>
                    </li>
                    <li className="form__li">
                        <details className="form__details">
                            <summary className="form__summary">02. BILLING INFORMATION</summary>
                            <div className="form__flex">
                                {/* <!-- Доставка --> */}
                                <div className="form__shipping">
                                    <h3 className="form__heading">Check as a guest or register</h3>
                                    <p className="form__text">Register with us for future convenience</p>

                                    <div className="form__box-input">
                                        <input type="checkbox" className="form__input" />
                                        <label htmlFor="#" className="form__label">checkout as guest</label>
                                    </div>
                                    <div className="form__box-input">
                                        <input type="checkbox" className="form__input" />
                                        <label htmlFor="#" className="form__label">register</label>
                                    </div>

                                    <h3 className="form__heading">register and save time!</h3>
                                    <p className="form__text">Register with us for future convenience</p>

                                    <p className="form__text-link">
                                        <i className="fa-solid fa-angles-right"></i>
                                        <a href="#" className="form__link">Fast and easy checkout</a>
                                    </p>
                                    <p className="form__text-link">
                                        <i className="fa-solid fa-angles-right"></i>
                                        <a href="#" className="form__link">Easy access to your order history and status</a>
                                    </p>

                                    <a href="#" className="form__button">Continue</a>
                                </div>
                                {/* <!-- Регистрация --> */}
                                <form className="form__registration">
                                    <h3 className="form__heading">Already registed?</h3>
                                    <p className="form__text">Please log in below</p>

                                    <div className="form__right-box-input">
                                        <label htmlFor="#" className="form__right-label">EMAIL ADDRESS<span
                                            className="form__symbol">*</span></label>
                                        <input required type="email" className="form__right-input" />
                                    </div>
                                    <div className="form__right-box-input">
                                        <label htmlFor="#" className="form__right-label">PASSWORD<span
                                            className="form__symbol">*</span></label>
                                        <input required type="password" className="form__right-input" />
                                    </div>

                                    <p className="form__right-text">* Required Fileds</p>

                                    <div className="form__righ-button-box">

                                        <button className="form__button" type="submit">Log in</button>
                                        <a href="#" className="form__right-button-text">Forgot Password ?</a>
                                    </div>
                                </form>
                            </div>
                        </details>
                    </li>
                    <li className="form__li">
                        <details className="form__details">
                            <summary className="form__summary">03. Billing information</summary>
                            <div className="form__flex">
                                <p>In the process of development.</p>
                            </div>
                        </details>
                    </li>
                    <li className="form__li">
                        <details className="form__details" >
                            <summary className="form__summary">04. Shipping Method</summary>
                            <div className="form__flex">
                                <p>In the process of development.</p>
                            </div>
                        </details>
                    </li>
                    <li className="form__li">
                        <details className="form__details" >
                            <summary className="form__summary">05. Payment method</summary>
                            <div className="form__flex">
                                <p>In the process of development.</p>
                            </div>
                        </details>
                    </li>
                    <li className="form__li">
                        <details className="form__details">
                            <summary className="form__summary">06. Order review</summary>
                            <div className="form__flex">
                                <p>In the process of development.</p>
                            </div>
                        </details>
                    </li>
                </ul>
            </div>

            <Subscribe />
            <Footer />
        </div>
    )
};
