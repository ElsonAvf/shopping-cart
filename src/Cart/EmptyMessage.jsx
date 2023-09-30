import { Link } from 'react-router-dom'
import cartEmpty from './../assets/cart-empty.svg'

export default function EmptyMessage() {
  return (
    <div className='h-[100svh] flex flex-col items-center justify-center'>
      <img className='w-32 opacity-60' src={cartEmpty} alt="Empty Cart" />
      <h1 className='my-4 text-2xl'>Your cart is empty</h1>
      <Link className='py-2 px-4 bg-black text-white' to={-1}>
        Go Shopping
      </Link>
    </div >
  )
}