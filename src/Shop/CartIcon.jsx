import { Link } from 'react-router-dom'
import { useCartContext } from './../context/Cart.jsx'

export default function CartIcon() {
  const cart = useCartContext()
  const quantity = cart.reduce((total, product) => {
    return total + product.quantity
  }, 0)
  
  return (
    <Link className='bg-white relative' to='cart'>
      <img className='ml-auto w-10' src='/src/assets/cart.svg' alt='Cart' />
      <div className='absolute -top-2 -right-1.5 rounded-full bg-red-600 text-white w-7 h-7 grid place-content-center text-xs font-bold'>
        {quantity > 99 ? '99+' : quantity}
      </div>
    </Link>
  )
}
