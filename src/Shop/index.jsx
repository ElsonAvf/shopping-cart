import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllProducts } from './../fakestoreapi.js'
import Product from './../components/Product'
import CartIcon from './CartIcon'
import ErrorMessage from './Error'

export default function Shop() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(undefined)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(json => setProducts(json))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <div className='h-[100svh] text-5xl grid place-content-center'>Loading...</div>
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <div>
      <header className='bg-white sticky top-0 p-4 flex justify-between items-center border-b border-b-black max-w-5xl mx-auto'>
        <Link to={-1}>
          <h1 className='text-2xl font-extrabold'>SHOP</h1>
        </Link>
        <CartIcon />
      </header>
      <ul className='space-y-4 px-4 pb-4 mt-8'>
        {products.map(product => (
          <li key={product.id} className='border border-black p-4 max-w-md mx-auto flex gap-4 items-center'>
            <img
              className='w-32 grow-0'
              src={product.image}
              alt={product.title}
            />
            <Product key={product.id} product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}