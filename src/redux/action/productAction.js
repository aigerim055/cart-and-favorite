import axios from "axios";


export const getProducts = () => {
	return (dispatch) => {
		axios('https://648adff917f1536d65e9e196.mockapi.io/api/items')
			.then(({data}) => {
				dispatch({type: 'GET_PRODUCTS', payload: data})
			})
	}
}

export const editRating = (value) => {
	return (dispatch) => {
		axios.put(`https://648adff917f1536d65e9e196.mockapi.io/api/items/${value.id}`, value)
			.then(({data}) => {
				dispatch({type: 'EDIT_RATING', payload: data})
			})
	}
}

export const editFavorite = value => {
	return (dispatch) => {
		axios.put(`https://648adff917f1536d65e9e196.mockapi.io/api/items/${value.id}`, value)
			.then(({data}) => {
				dispatch({type: 'EDIT_FAVORITE', payload: data})
			})
	}
}

export const addToCart = (product) => {
	return {type: 'ADD_TO_CART', payload: product}
}

export const deleteInCart = (id) => {
	return {type: 'DELETE_IN_CART', payload: id}
}

export const increaseAmount = (id) => {
	return {type: 'INCREASE_AMOUNT', payload: id}
}

export const decreaseAmount = (id) => {
	return {type: 'DECREASE_AMOUNT', payload: id}
}