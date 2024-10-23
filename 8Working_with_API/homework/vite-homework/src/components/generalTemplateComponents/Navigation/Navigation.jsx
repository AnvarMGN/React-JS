import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="nav center">
            <div className="container">
                <ul className="menu">
                    <li className="menu-list">
                        {/* <a href="index.html" className="menu-link">home</a> */}
                        <Link to='/' className="menu-link">home</Link>
                    </li>
                    <li className="menu-list">
                        {/* <a href="product.html" className="menu-link">man</a> */}
                        <Link to='/product' className="menu-link">man</Link>
                        <div className="menu-box">
                            <div className="box-item1">
                                <h3 className="menu-title">man</h3>
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
                            <div className="box-item2">
                                <h3 className="menu-title">women</h3>
                                <a href="" className="box-link">Dresses</a>
                                <a href="" className="box-link">Tops</a>
                                <a href="" className="box-link">Sweaters/Knits</a>
                                <a href="" className="box-link">Jackets/Coats</a>
                            </div>
                            <div className="box-item3">
                                <h3 className="menu-title">women</h3>
                                <a href="" className="box-link">Dresses</a>
                                <a href="" className="box-link">Tops</a>
                                <a href="" className="box-link">Sweaters/Knits</a>
                            </div>
                            <div className="box-item4">
                                <h3 className="menu-title">women</h3>
                                <a href="" className="box-link">Dresses</a>
                                <a href="" className="box-link">Tops</a>
                                <a href="" className="box-link">Sweaters/Knits</a>
                                <a href="" className="box-link">Jackets/Coats</a>
                            </div>
                            <div className="box-item5">
                                <a href="product.html" className="box-linksuper">
                                    <img className="menu_box_image" src="img/menu_box_image.jpg" alt="photo" />
                                    <h2 className="box-sale">super sale!</h2>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="menu-list">
                        {/* <a href="product.html" className="menu-link">women</a> */}
                        <Link to='/product' className="menu-link">women</Link>
                    </li>
                    <li className="menu-list">
                        {/* <a href="product.html" className="menu-link">kids</a> */}
                        <Link to='/product' className="menu-link">kids</Link>
                    </li>
                    <li className="menu-list">
                        {/* <a href="product.html" className="menu-link">accoseriese</a> */}
                        <Link to='/product' className="menu-link">accoseriese</Link>
                    </li>
                    <li className="menu-list">
                        <a href="shopping_cart.html" className="menu-link">featured</a>
                    </li>
                    <li className="menu-list revers">
                        <a href="#hotdeals" className="menu-link">hot deals</a>
                        <div className="menu-box">
                            <div className="box-item1">
                                <h3 className="menu-title">hot deals</h3>
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
                            <div className="box-item2">
                                <h3 className="menu-title">women</h3>
                                <a href="" className="box-link">Dresses</a>
                                <a href="" className="box-link">Tops</a>
                                <a href="" className="box-link">Sweaters/Knits</a>
                                <a href="" className="box-link">Jackets/Coats</a>
                            </div>
                            <div className="box-item3">
                                <h3 className="menu-title">women</h3>
                                <a href="" className="box-link">Dresses</a>
                                <a href="" className="box-link">Tops</a>
                                <a href="" className="box-link">Sweaters/Knits</a>
                            </div>
                            <div className="box-item4">
                                <h3 className="menu-title">women</h3>
                                <a href="" className="box-link">Dresses</a>
                                <a href="" className="box-link">Tops</a>
                                <a href="" className="box-link">Sweaters/Knits</a>
                                <a href="" className="box-link">Jackets/Coats</a>
                            </div>
                            <div className="box-item5">
                                <Link to='/product' >
                                    <img className="menu_box_image" src="img/menu_box_image.jpg" alt="photo" />
                                    <h2 className="box-sale">super sale!</h2>
                                </Link>
                                {/* <a href="product.html" className="box-linksuper">
                                    <img className="menu_box_image" src="img/menu_box_image.jpg" alt="photo" />
                                    <h2 className="box-sale">super sale!</h2>
                                </a> */}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
