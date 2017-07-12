import {
	CHECKOUT_SUCCESS
} from '../constants/ActionTypes';
import { combineReducers } from 'redux';
/*
	orders= {
		orders: [
			{
				orderitems:[
					{content: xxxx,price:},
					...
				],
				oid: 1,
			}

		],
		sum: 111
			}
	}
*/

const sum = (state = 0, action) => {
	switch (action.type){
		case CHECKOUT_SUCCESS:
			return action.datas.total;
		default :
			return state;
	}
}

const orders = (state = [], action) => {
	switch(action.type){
		case CHECKOUT_SUCCESS:
			return [
				{orderitems:action.datas.products}
			];
		default: 
			return state;
	}
}

export default combineReducers({
	sum,
	orders
});

