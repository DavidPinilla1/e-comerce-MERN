import React, { useEffect, useState } from 'react'
import './Home.scss'
import ProductItem from '../../components/Product/ProductItem';
import { getProducts } from '../../redux/actions';
import { connect } from 'react-redux';
const Home = props => {
    useEffect(() => {
       getProducts()
       .catch(console.error)
    }, [])
    return (
        <div className="products">
            {props.products?.map(product => <ProductItem key={product._id} product={product}/>)}
        </div>
    )
}
const mapStateToProps = (state) => ({products:state.products})
export default connect(mapStateToProps) (Home);