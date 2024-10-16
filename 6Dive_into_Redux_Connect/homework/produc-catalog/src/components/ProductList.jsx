import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability} from "../store/productSlice";
import { UpdateProduct } from "./updateProduct";
import { toggleVisibility } from "../store/visibilitySlice";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const { visibility } = useSelector((state) => state.visibility);
  const dispatch = useDispatch();
  console.log({ products });

  const toggleEditForm = () => {
    dispatch(toggleVisibility());
    // логика для передачи выбранного продукта в UpdateProduct
  };
  return (
    // <div>
    //   <h2>Product List</h2>
    //   {products.length === 0 ? (
    //     <p>No products available.</p>
    //   ) : (
    //     <ul>
    //       {products.map((product) => (
    //         <li key={product.id}>
    //           <h3>{product.name}</h3>
    //           <p>{product.description}</p>
    //           <p>Price: ${product.price}</p>
    //           <p>Available: {product.available ? "Yes" : "No"}</p>
    //           <button onClick={() => dispatch(deleteProduct(product.id))}>
    //             Delete
    //           </button>
    //           <button onClick={() => dispatch(toggleAvailability(product.id))}>
    //             Toggle Availability
    //           </button>
    //           <UpdateProduct onChange={() => dispatch(updateProduct(product.id))} product={product} ></UpdateProduct>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
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
              <button onClick={() => toggleEditForm(product)}>Edit</button>
              {visibility === "visible" && (
                <UpdateProduct product={product} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;


// Этот фрагмент кода записан в JavaScript (вероятно, в рамках компонента React) и использует метод условного рендеринга.
// Давайте разберем это:
// Объяснение:

// * Видимость ===" Visible ":  Это проверка сравнения, является ли переменная Видимость 'равна строке "Visible" .
// * &&:  Это логичный »и« Оператор ».Это означает, что код внутри скобок будет выполняться только в том случае, если  оба условия верны:
// * видимость равен " видимому " 
// * Выражение после && - это правда.
// *Он отображается с помощью опоры под названием «Product», которая, вероятно, является объектом, содержащим данные об обновлении продукта.
// * {}:  Эти кудрявые скобки используются для обертывания выражений в JSX, как вы внедряете JavaScript в HTML-синтаксис React.

//  Проще говоря: 
// Этот код говорит:
// eslint-disable-next-line no-irregular-whitespace
// * Если переменная «видимость» установлена ​на « visible », то отобразите компонент updateProduct 'и передайте его объект product' как данные.
// * Если «видимость» - это что -то иное, чем « видимый », то не визуализируйте компонент updateProduct '.

//  Пример использования: 
// Представьте, что у вас есть страница продукта, на которой вы хотите показать кнопку «Обновление продукта» только тогда, когда продукт виден (например, это не в проекте состояния).

//  javascript
// const product = {
// Название: «Мой продукт»,
// Видимость: "видимо"
// };

// функция myProductPage () {
// возвращаться (
// <div>
// {/ * Другая информация о продукте */}
// {видимость === "Visible" && (
// <Updateproduct product = {product} />
// )}
// </div>
// );
// }
 

// В этом примере, поскольку «видимость» является «видимым» , компонент updateProduct 'будет отображаться.
