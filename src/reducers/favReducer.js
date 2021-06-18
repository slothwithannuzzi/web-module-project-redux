import { ADD_FAV, DELETE_FAV, TOGGLE_FAV } from "../actions/favActions";

const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAV:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAV:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case DELETE_FAV:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default reducer;