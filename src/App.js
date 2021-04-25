import React, { Component } from 'react'
import './styles/scss/styles.scss';
import {  commerce } from './lib/Commerce'
import ProductsList from './lib/components/ProductsList'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: [],

        }
    }

    componentDidMount(){
        this.fetchProducts()
    }

    fetchProducts(){
        commerce.products.list()
        .then((products) => { this.setState({
            products: products.data
        })
        })
        .catch((error) => {
            console.log('error fetching your product data list')
        })
    }

    render(){
        const { products } = this.state;

        return(
            <div className="app">
                <ProductsList 
                products={products}
                />
            </div>
        )
    }
}

export default App;