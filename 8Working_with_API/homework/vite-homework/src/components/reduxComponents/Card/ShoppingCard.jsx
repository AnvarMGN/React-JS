/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteGoods, setQuantityCart } from "../../../store/shoppingSlice";
import { useState } from "react";

export const ShoppingCard = ({ item }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1)

    const handelQuantity = (e, id) => {
        const value = parseFloat(e.target.value);
        setQuantity(value)
        // console.log("quantity", value);
        dispatch(setQuantityCart({ id, value: value }))
    };

    return (
        <div>
            <div className="shopping-cart__prod-info" id="${cartEl.id}">
                <div className="shopping-cart__about-prod">
                    <a href="single_page.html" className="shopping-cart__linkimg">
                        <img src={item.src} alt="photo" className="shopping-cart__img" />
                    </a>
                    <a href="single_page.html">
                        <div className="shopping-cart__prod-description">
                            <h1 className="shopping-cart__prod-description_heading">{item.title}</h1>
                            <p className="shopping-cart__color">
                                Color:
                                <span className="shopping-cart__prod">Red</span>
                            </p>
                            <p className="shopping-cart__color">
                                Size:
                                <span className="shopping-cart__prod">Xll</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div className="shopping-cart__about-text">
                    <p className="shopping-cart__price">${item.price}</p>
                    <input
                        className="shopping-cart__quantity"
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => handelQuantity(e, item.id)}
                    />
                    <p className="shopping-cart__shipping">free</p>
                    <p className="shopping-cart__subtotal">${item.price}</p>
                    <div className="shopping-cart__action">
                        <a onClick={() => dispatch(deleteGoods(item.id))} href="#" className="cart__button-action">
                            <img src="img/cart_del.png" alt="delete" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};
