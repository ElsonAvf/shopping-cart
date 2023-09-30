import { useState } from 'react'
import { useCartContext } from './../context/Cart'
import CartProduct from './CartProduct'
import EmptyMessage from './EmptyMessage'
import RemoveProductModal from './RemoveProductModal'
import ConfirmedPurchaseModal from './ConfirmPurchaseModal'

export default function Cart() {
  const [removeProductModal, setRemoveProductModal] = useState({
    shouldDisplay: false,
    product: {},
  });
  const [confirmedPurchase, setConfirmedPurchase] = useState(false);
  const cart = useCartContext()

  if (cart.length === 0) {
    return <EmptyMessage />
  }

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)

  const quantityOfProducts = cart.reduce((total, product) => {
    return total + product.quantity
  }, 0)

  return (
    <div>
      <section className='m-4 border border-black p-4 max-w-md mx-auto'>
        <div className='mb-4 flex justify-between items-center'>
          <h1 className='text-3xl'>You Cart</h1>
          <img className='w-20' src='/src/assets/cart.svg' alt='Cart' />
        </div>
        <table>
          <tr className='text-xl'>
            <th className='font-normal'>Quantity of products</th>
            <td className='font-bold'>{quantityOfProducts}</td>
          </tr>
        </table>
        <table>
          <tr className='text-xl'>
            <th className='font-normal'>Total to pay</th>
            <td className='font-bold'>${totalPrice.toFixed(2)}</td>
          </tr>
        </table>
        <button className='py-2 px-4 bg-black text-white block w-fit ml-auto' onClick={() => setConfirmedPurchase(true)}>
          Checkout
        </button>
      </section>
      <ul className='pb-4 px-4 space-y-4'>
        {
          cart.map(product => (
            <CartProduct key={product.id} product={product} removeProduct={setRemoveProductModal} />
          ))
        }
      </ul>
      {removeProductModal.shouldDisplay &&
        <RemoveProductModal
          product={removeProductModal.product}
          close={() => setRemoveProductModal({
            shouldDisplay: false, product: {}
          })}
        />
      }
      {confirmedPurchase && <ConfirmedPurchaseModal close={() => setConfirmedPurchase(false)} />}
    </div>
  )
}
