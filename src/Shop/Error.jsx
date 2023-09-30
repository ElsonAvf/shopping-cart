import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import cartErrorIcon from './../assets/cart-error.svg'

export default function ErrorMessage({ error }) {
  const navigate = useNavigate()
  return (
    <div className='h-[100svh] flex flex-col items-center justify-center'>
      <img className='w-32 opacity-60' src={cartErrorIcon} alt='Error' />
      <p className='text-2xl'>{error}</p>
      <p className='text-2xl'>Something went wrong</p>
      <button className='px-4 py-2 bg-black text-white mt-4 mb-2' onClick={() => navigate(0)}>
        Refresh the page
      </button>
      <p>or try again later</p>
    </div>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
}
