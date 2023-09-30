import { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext(null)
const DispatchContext = createContext(null)

export const useCartContext = () => {
  return useContext(CartContext)
}

export const useDispatchContext = () => {
  return useContext(DispatchContext)
}

const productAlreadyAdded = (state, productId) => {
  for (let product of state) {
    if (product.id === productId) return true;
  }
  return false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      const newProduct = action.product;
      if (productAlreadyAdded(state, newProduct.id)) {
        const updated = state.map(product => {
          if (product.id === newProduct.id) {
            return newProduct
          }
          return product
        })
        return updated
      }
      return [...state, action.product]
    }
    case 'delete': {
      const updated = state.filter(product => !(product.id === action.productId))
      return updated
    }
    case 'clean':
      return []
  }
}

export default function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, [])

  return (
    <CartContext.Provider value={cart}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </CartContext.Provider>
  )
}

CartContextProvider.propTypes = {
  children: PropTypes.element,
}
