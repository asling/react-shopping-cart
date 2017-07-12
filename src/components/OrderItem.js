import React from 'react'
import PropTypes from 'prop-types'

const OrderItem = ({orderitems}) => {
	const has =  orderitems > 0;
	const nodes = orderitems ? (
		orderitems.map(item => 
			<div key={item.id}>
				{item.title}
			</div>
		)
	) : '' ;

	return (
		<div>
			{nodes}
		</div>
	)
}

OrderItem.propTypes = {
	title: PropTypes.string,
	id: PropTypes.number,
}

export default OrderItem;