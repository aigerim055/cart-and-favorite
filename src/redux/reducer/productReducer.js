
const initialState = {
	products: [],
	carts: []
}

export default  function ProductReducer( state = initialState, action ) {
	switch (action.type) {
		case 'GET_PRODUCTS':
			return {...state, products: action.payload}
		case 'EDIT_RATING':
			return {...state, products: state.products.map(product => product.id === action.payload.id ? action.payload : product)}
		case 'EDIT_FAVORITE':
			return {...state, products: state.products.map(product => product.id === action.payload.id ? action.payload : product)}
		case 'ADD_TO_CART':
			return {...state, carts: [...state.carts, action.payload] }
		case 'INCREASE_AMOUNT':
			return {...state,
				carts: state.carts.map(cart => cart.id === action.payload ?
					{...cart, amountInCart: cart.amountInCart + 1} : cart)}
		case 'DECREASE_AMOUNT':
			return {...state,
				carts: state.carts.map(cart => cart.id === action.payload ?
					{...cart, amountInCart: cart.amountInCart - 1} : cart)}
		case 'DELETE_IN_CART':
			return {...state, carts: state.carts.filter(product => product.id !== action.payload)}
		default:
			return state
	}
}
