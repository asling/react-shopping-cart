import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Orders from '../components/Orders';

const OrdersContainer = ({orders,price}) => (
	<Orders orders={orders} price={price} />
);

OrdersContainer.propTypes = {
	orders: PropTypes.array.isRequired,
	price: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
	orders:state.orders.orders,
	price:state.orders.sum
});

export default connect(mapStateToProps)(OrdersContainer);