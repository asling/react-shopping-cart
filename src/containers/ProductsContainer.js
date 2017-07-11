import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products';
import ProductItem from '../components/ProductItem';
import ProductList from '../components/ProductList';

const ProductsContainer = ({products, addToCart}) => (
	<ProductList title="Products" >
		{products.map(product => 
			<ProductItem 
				key={product.id}
				product={product}
				onAddToCartClicked={()=>addToCart(product.id)} />
		)}
	</ProductList>
);

ProductsContainer.propTypes = {
	products: PropTypes.arrayOf(PropTypes.share({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})).isRequired,
	addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	products: getVisibleProducts(state.products)
});

export default connect(
	mapStateToProps,
	{ addToCart }
)(ProductsContainer);