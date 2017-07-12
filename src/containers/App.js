import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import OrdersContainer from './OrdersContainer';

const App = () => (
	<div>
		<h2>购物车</h2>
		<hr />
		<ProductsContainer />
		<hr />
		<CartContainer />
		<hr />
		<OrdersContainer />
	</div>
)

export default App;