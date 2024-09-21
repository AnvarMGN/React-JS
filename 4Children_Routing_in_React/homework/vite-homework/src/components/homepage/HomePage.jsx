import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <>
            <h1>Главная страница</h1>
            <Link to='/about'>на страницу - О нас</Link>
        </>
    )
}
