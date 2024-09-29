const TOGGLE_THEME = "TOGGLE_THEME";//action type

export const themeToggle = () => ({type: TOGGLE_THEME})//action creater

const initialState = {// тема по умолчанию
    theme: "light"
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return{state, theme:state.theme === "light" ? "dark" : "light" }// либо ...state - при большем количестве передаваемых значений
        default: return state;
    }
}