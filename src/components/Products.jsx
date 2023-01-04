import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <input type="search" name="search" id="search" placeholder='Search Products' />
        <nav className='products-nav'>
            <Link to="featured" >Featured</Link>
            <Link to="new" >new product</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Products