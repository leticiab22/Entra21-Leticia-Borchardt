import React from 'react';
import ReactDOM from 'react-dom';
import { FilterableProductTable } from './components/FilterableProductTable';
import { ProductCategoryRow } from './components/ProductCategoryRow';
import { ProductRow } from './components/ProductRow';
import { ProductTable } from './components/ProductTable';
import { SearchBar } from './components/SearchBar';
import './styles.css';

function App() {
  return (
    <div id="container">
        <FilterableProductTable/>
        <SearchBar/>
        <ProductTable/>
        <ProductCategoryRow/>
        <ProductRow/>
    </div>
  );
}

  
  
  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
   
  ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('container')
  );
  

  export default App;
