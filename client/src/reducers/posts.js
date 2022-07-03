import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, CREATE, UPDATE, LIKE, DELETE, START_LOADING, END_LOADING } from "../constants/actionTypes";

export default (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case START_LOADING: 
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case FETCH_BY_SEARCH:
            return {
                ...state,
                posts: action.payload
            };
        case FETCH_POST:
            return {
                ...state,
                post: action.payload
            };
        case FETCH_ALL:
            return { ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages
            };
        case LIKE:
            return { ... state, posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post) }
        case CREATE:
            return { ... state, posts: [action.payload, ...state.posts] };
        case DELETE:
            return { ... state, posts: state.posts.filter(post => action.payload !== post._id) }
        case UPDATE:
            return { ... state, posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post) }
        default:
            return state;
    }
}