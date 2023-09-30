import PropTypes from 'prop-types'
import { useDispatchContext } from './../context/Cart';
import cartCheckIcon from './../assets/cart-check.svg'

export default function ConfirmedPurchaseModal({ close }) {
  const dispatch = useDispatchContext()
  
  const handleCleanCart = () => {
    dispatch({ type: 'clean' })
    close()
  }
  
  return (
    <div className='bg-black/50 inset-0 fixed grid place-content-center'>
      <div className='p-5 rounded bg-white border-4 border-green-500 flex flex-col items-center gap-4'>
      <img className='w-32 opacity-50' src={cartCheckIcon} alt='Purchase Confirmed' />
        <p className='text-xl'>Your purchase has been confirmed</p>
        <button className='bg-green-500 px-8 py-2 text-white' onClick={handleCleanCart}>
          Ok
        </button>
      </div>
    </div>
  )
}

ConfirmedPurchaseModal.propTypes = {
  close: PropTypes.func.isRequired,
}
