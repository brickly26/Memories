import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, actionData: action.data, loading: false, errors: null };
        case LOGOUT:
            localStorage.clear();
            return { ...state, actionData: null, loading: false, errors: null };
        default:
            return state;
    }
}

export default authReducer;