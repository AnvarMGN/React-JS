import { useDispatch, useSelector } from 'react-redux';
import { themeToggle } from '../../store/SwitchReducer';

export const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.theme);

    return (
        <div className={theme} style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center", width: "300px", height: "200px" }}>
            <h3>Переключатель темы</h3>
            <p style={{color:"black"}}>Название темы: {theme}</p>
            <button onClick={() => { dispatch(themeToggle()) }}> Нажми </button>
        </div>
    )
};
