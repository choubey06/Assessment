import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';
import './ProductList.css';

const ProductList = ({ products }) => {
    return (
        <div>
            <h3>Products</h3>
            <ul className="productList">
              {products.map(product => (
                  <li key={product.id} className="productListItem">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
