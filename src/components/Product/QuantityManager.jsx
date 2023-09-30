import PropTypes from 'prop-types'

export default function QuantityManager({ quantity, setQuantity }) {
  const increaseQuantity = () => {
    setQuantity(prevState => prevState + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevState => {
      return prevState > 0 ? prevState - 1 : 0;
    });
  };

  const changeQuantity = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const quantity = parseInt(formData.get('quantity'));
    if (isNaN(quantity)) {
      setQuantity(0)
    } else {
      setQuantity(quantity)
    }
  };

  const onChange = e => {
    let value = e.target.value
    if (value.length > 4) value = value.slice(0, 4);
    if (!value) value = 0;
    setQuantity(+value)
  };

  return (
    <section className='w-fit mx-auto'>
      <h3 className='text-center'>quantity</h3>
      <div className='flex border border-black rounded'>
        <button className='border-r border-r-black w-9 h-9' onClick={increaseQuantity}>
          <img className='w-4 m-auto' src='/src/assets/arrow-up.svg' />
        </button>
        <form onSubmit={changeQuantity}>
          <input
            className='outline-none h-full w-14 text-center py-1'
            type='number'
            value={quantity}
            name='quantity'
            onChange={onChange}
          />
        </form>
        <button className='border-l border-l-black w-9 h-9' onClick={decreaseQuantity}>
          <img className='w-4 m-auto' src='/src/assets/arrow-down.svg' />
        </button>
      </div>
    </section>
  )
}

QuantityManager.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
}