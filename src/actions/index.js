import shop from '../api/shops';
import * as types from '../constants/ActionTypes';

const receiveProducts = products => ({
	type: types.RECEIVE_PRODUCTS,
	products: products
});

export const getAllProducts = ()=> dispatch => {
	shop.getProducts(products => {
		dispatch(receiveProducts(products));
	})
}

const addToCartUnsafe = productId => ({
	type: types.ADD_TO_CART,
	productId
});

export const addToCart = productId => (dispatch,getState) => {
	if(getState().products.byId[productId].inventory > 0){
		dispatch(addToCartUnsafe(productId));
	}
}

export const checkout = ({products,total}) => (dispatch, getState) => {
	const { cart } = getState();
	const datas = {products,total};
	dispatch({
		type: types.CHECKOUT_REQUEST
	});
	shop.buyProducts(datas, () => {
		dispatch({
			type: types.CHECKOUT_SUCCESS,
			datas
		});
	});
}