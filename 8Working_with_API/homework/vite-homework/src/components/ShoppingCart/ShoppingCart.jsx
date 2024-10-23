import { Link } from "react-router-dom";
import { Breadcrumbs } from "../generalTemplateComponents/Breadcrumbs/Breadcrumbs";
import { Footer } from "../generalTemplateComponents/Footer/Footer";
import { Header } from "../generalTemplateComponents/Header/Header";
import { Navigation } from "../generalTemplateComponents/Navigation/Navigation";
import { Subscribe } from "../generalTemplateComponents/Subscribe/Subscribe";
import { useSelector } from "react-redux";
import { ShoppingCard } from "../reduxComponents/Card/ShoppingCard";

export const ShoppingCart = () => {
  const shopping = useSelector((state) => state.shopping.shoppingList);
  // console.log("shopping", shopping);

  function totalPrice() {
    const prices = shopping.map(item => parseInt(item.price) * item.quantity);
    return prices.reduce((sum, price) => sum + price, 0);
  };

  return (
    <div>
      <Header />
      <Navigation />
      <Breadcrumbs />

      <div className="shopping-cart center">
        <div className="shopping-cart__block">
          <div className="shopping-cart__header">
            <h2 className="shopping-cart__heading left">Product Details</h2>
            <h2 className="shopping-cart__heading">Unite Price</h2>
            <h2 className="shopping-cart__heading">Quantity</h2>
            <h2 className="shopping-cart__heading">Shipping</h2>
            <h2 className="shopping-cart__heading">Subtotal</h2>
            <h2 className="shopping-cart__heading">ACTION</h2>
          </div>

          {shopping.map((goods) => (
            <ShoppingCard key={goods.id} item={goods} />
          ))};

          <div className="shopping-cart__action-box">
            <button className="shopping-cart__action-box_button" type="submit">CLEAR SHOPPING CART</button>
            <Link to="/product">
              <button className="shopping-cart__action-box_button" type="submit">CONTINUE SHOPPING</button>
            </Link>
          </div>
        </div>
        <div className="buy-box center">
          <form action="#" className="buy-box__shipping">
            <h1 className="buy-box__heading">Shipping Adress</h1>
            <input
              className="buy-box__input-text"
              required
              type="text"
              placeholder="Bangladesh" />
            <input
              className="buy-box__input-text"
              required
              type="text"
              placeholder="State" />
            <input
              className="buy-box__input-text"
              required
              type="text"
              placeholder="Postcode / Zip" />
            <button className="buy-box__button" type="submit">get a quote</button>
          </form>
          <form action="#" className="buy-box__discount">
            <h1 className="buy-box__heading">coupon discount</h1>
            <p className="buy-box__discount_text">Enter your coupon code if you have one</p>
            <input
              required
              className="buy-box__input-text"
              type="text"
              placeholder="State" />
            <button className="buy-box__button_discount" type="submit">Apply coupon</button>
          </form>
          <div className="buy-box__total">
            <div className="buy-box__subtotal">
              <p className="buy-box__subtotal_text">Sub total</p>
              <p className="buy-box__subtotal_sum">${totalPrice()}</p>
            </div>
            <div className="buy-box__grandtotal">
              <p className="buy-box__grandtotal_text">GRAND TOTAL</p>
              <p className="buy-box__grandtotal_sum">${totalPrice()}</p>
            </div>
            <Link to="/checkout" className="buy-box__buttonlink">proceed to checkout</Link>
          </div>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </div>
  )
};
