import PropTypes from 'prop-types'
import { useDispatchContext } from './../../context/Cart'

export default function AddToCardButton({ product }) {
  const dispatch = useDispatchContext()
  
  const add = () => {
    if(product.quantity > 0) {
      dispatch({type: 'add', product})
    }
  }
  
  return (
    <button className='px-4 bg-black text-white block ml-auto' onClick={add}>
      Add to Cart
    </button>
  )
}

AddToCardButton.propTypes = {
  product: PropTypes.object.isRequired,
}
