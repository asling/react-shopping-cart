import {
	ADD_TO_CART,
	CHECKOUT_REQUEST,
	CHECKOUT_FAILURE
} from '../constants/ActionTypes';

const initailState = {
	addedIds: [],
	quantityById: {}
};

const addedIds = (state = initailState.addedIds, action) => {
	switch (action.type){
		case ADD_TO_CART:
			if(state.indexOf(action.productId) !== -1){
				return state;
			}
			return [...state, action.productId];
		default:
			return state;
	}
}

const quantityById = (state = initailState.quantityById, action ) => {
	switch (action.type){
		case ADD_TO_CART:
			const { productId } = action;
			return {
				...state,
				[productId]: (state[productId] || 0) +1
			}
		default:
			return state;
	}
}

export const getQuantity = (state, productId) => state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initailState, action) => {
	switch(action.type){
		case CHECKOUT_REQUEST:
			return initailState;
		case CHECKOUT_FAILURE:
			return action.cart;
		default: 
			return {
				addedIds: addedIds(state.addedIds, action),
				quantityById: quantityById(state.quantityById, action)
			}
	}
}

export default cart;