/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addGoods } from "../../../store/shoppingSlice";
import { Link } from "react-router-dom";

export const ProductCard = ({ item }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addGoods(item));
    };

    return (
        <div>
            <div id={item.id} className="items_block">
                <Link to="/single_product" className="items_block_link" >
                    <img className="items_block_img" src={item.src} alt="photo" />
                    <div className="items_block_text">
                        <h5 className="items_block_item_title">{item.title}</h5>
                        <p className="items_block_item_price">${item.price}</p>
                    </div>
                </Link>
                <div className="items_block_box">
                    <a onClick={handleClick} href="#iconcart" className="items_block_box_add">
                        <img className="items_block_box_add_img" src="img/items_block_add_box.png" alt="add" />
                        <p className="add-txt">Add to Cart</p>
                    </a>
                </div>
            </div>
        </div>
    )
};
