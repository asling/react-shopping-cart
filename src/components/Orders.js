import React from 'react';
import PropTypes from 'prop-types';
import OrderItem from './OrderItem';

const Orders = ({orders,price}) => {
	const hasOrders = orders.length >0;
	const nodes = hasOrders ? (
		orders.map(order =>
			<div key='1'> 
			<OrderItem orderitems={order.orderitems} />
			<hr />
			</div>
		)
	) : '';

	return (
		<div>
			{nodes}
			<div>金额：{price}</div>
		</div>
	)
}

Orders.propTypes = {
	orders:PropTypes.array,
	price: PropTypes.string,
}

export default Orders;