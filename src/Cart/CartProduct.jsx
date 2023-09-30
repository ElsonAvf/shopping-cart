import PropTypes from 'prop-types'
import Product from './../components/Product'

export default function CartProduct({ product, removeProduct }) {
  return (
    <li className='border border-black flex items-center p-4 gap-4 max-w-md mx-auto'>
      <img
        className='w-32 grow-0'
        src={product.image}
        alt={product.title}
      />
      <div>
        <button className='block ml-auto p-2' onClick={() => removeProduct({
          shouldDisplay: true,
          product: product
        })}>
          <img className='w-7' src='/src/assets/trash.svg' alt='delete product' />
        </button>
        <Product product={product} />
      </div>
    </li>
  )
}

CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired,
}
