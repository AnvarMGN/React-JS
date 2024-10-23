import { Link } from "react-router-dom";

export const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs center">
            <h2 className="breadcrumbs__heading">New Arrivals</h2>
            <ul className="breadcrumbs__ul">
                <li className="breadcrumbs__li"><Link to="/" className="breadcrumbs__link">Home</Link></li>
                <li className="breadcrumbs__li"><Link to="/product" className="breadcrumbs__link">Men</Link></li>
                <li className="breadcrumbs__li"><Link to="/product" className="breadcrumbs__link">women</Link></li>
                <li className="breadcrumbs__li"><Link to="/product" className="breadcrumbs__link">kids</Link></li>
                <li className="breadcrumbs__li"><Link to="/product" className="breadcrumbs__link">New Arrivals</Link></li>
                {/* <!-- breadcrumbs__link_site --> */}
            </ul>
        </div>
    )
};
