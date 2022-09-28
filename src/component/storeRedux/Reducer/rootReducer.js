const initState = {
    cart: []

}

const rootReducer = (state = initState, action) => {
    switch (action.type) {

        /* --------------------------REDUX_CART -------------------------- */

        case 'DELETE_CART':
            console.log('Delete ID ', action.payload);
            var cart = state.cart;

            var newCart = cart.filter(item => item.id !== action.payload)
            return { ...state, cart: newCart };

        case 'ADD_CART':
            console.log('Add Cart ===> ', action.payload.id);
            var item = action.payload;
            return { ...state, cart: [...state.cart, item] };




        default:
            return state;
    }

}
export default rootReducer