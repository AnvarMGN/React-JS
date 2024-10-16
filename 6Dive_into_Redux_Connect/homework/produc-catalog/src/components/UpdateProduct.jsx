/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../store/productSlice";


export const UpdateProduct = ({ product }) => {//npm install prop-types
    // const [name, setName] = useState("");
    // const [description, setDescription] = useState("");
    // const [price, setPrice] = useState("");
    // const [available, setAvailable] = useState(true);

    // const { visibility } = useSelector((state) => state.visibility);// Селектор для видимости формы

    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [available, setAvailable] = useState(product.available);
    const dispatch = useDispatch();

    useEffect(() => {
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setAvailable(product.available);
    }, [product]);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            updateProduct({ name, description, price: parseFloat(price), available, id: product.id }),
        );
        setName("");
        setDescription("");
        setPrice("");
        setAvailable(true);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Edit form</p>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <label>
                    Available:
                    <input
                        type="checkbox"
                        checked={available}
                        onChange={(e) => setAvailable(e.target.checked)}
                    />
                </label>
                <button type="submit">Save changes</button>
            </form>

        </div>
    )
}
