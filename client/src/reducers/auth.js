import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, actionData: action?.data };
        case LOGOUT:
            localStorage.clear();
            return { ...state, actionData: null };
        default:
            return state;
    }
}

export default authReducer;