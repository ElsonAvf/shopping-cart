import PropTypes from 'prop-types'
import { useDispatchContext } from './../context/Cart'
import cartErrorIcon from './../assets/cart-error.svg'

export default function RemoveProductModal({ product, close }) {
  const dispatch = useDispatchContext()
  
  const handleDelete = () => {
    dispatch({ type: 'delete', productId: product.id })
    close()
  }
  
  return (
    <div className='inset-0 grid place-content-center bg-black/50 fixed'>
      <div className='w-96 p-5 rounded bg-white'>
        <img className='w-32 opacity-60 mx-auto' src={cartErrorIcon} alt='Cart' />
        <p className='text-center mt-2'>
          Do you wish to remove <b>{product.quantity} {product.title}</b> from your cart?
        </p>
        <div className='w-fit ml-auto space-x-4 mt-5'>
          <button className='py-2 px-6 border border-black' onClick={close}>
            No
          </button>
          <button className='p-2 text-white border border-red-500 bg-red-600' onClick={handleDelete}>
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  )
}

RemoveProductModal.propTypes = {
  product: PropTypes.object.isRequired,
  close: PropTypes.func.isRequried,
}
