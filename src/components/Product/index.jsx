import { useState } from 'react'
import PropTypes from 'prop-types'
import AddToCartButton from './AddToCartButton'
import QuantityManager from './QuantityManager'

export default function Product({ product }) {
  const [quantity, setQuantity] = useState(
    product?.quantity || 0
  )
  const totalPrice = quantity * product.price;

  return (
    <div className='flex items-center gap-4'>
      <div className='space-y-3 w-full'>
        <h2 className='font-bold text-xl'>
          {product.title}
        </h2>
        <p>${product.price.toFixed(2)}</p>
        <QuantityManager
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <div className='flex justify-between'>
          <table>
            <tr><th className='text-center'>Total</th></tr>
            <tr><td>${totalPrice.toFixed(2)}</td></tr>
          </table>
          <AddToCartButton product={{ ...product, quantity }} />
        </div>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}
