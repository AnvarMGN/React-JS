import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability, updateProduct } from "../store/productSlice";
import { UpdateProduct } from "./updateProduct";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log({ products });

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Available: {product.available ? "Yes" : "No"}</p>
              <button onClick={() => dispatch(deleteProduct(product.id))}>
                Delete
              </button>
              <button onClick={() => dispatch(toggleAvailability(product.id))}>
                Toggle Availability
              </button>
              <UpdateProduct onChange={() => dispatch(updateProduct(product.id))} product={product} ></UpdateProduct>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
