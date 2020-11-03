import React from 'react'
import products from './products'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <section>
      <h1>Dashboard</h1>
      {products.map((product) => (
        <div className='product-card'>
          <h3>{product.name}</h3>
          <h3>{product.price}</h3>
          <h3>{product.priority}</h3>
          <Link to={`/product/${product.name}`}>Product</Link>
        </div>
      ))}
    </section>
  )
}
