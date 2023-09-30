import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='h-[100svh] p-4 flex items-center justify-center'>
      <h1 className='fixed top-4 text-center text-2xl font-extrabold'>
        SHOP
      </h1>
      <div>
        <h2 className='mb-2 text-5xl text-center font-bold'>
          Lorem Ipsum Dolor
        </h2>
        <p className='text-center text-xl'>
          quis reprehenderit enim voluptate minim mollit anim
        </p>
        <Link className='mx-auto block text-center w-32 mt-6 py-2 text-white bg-black' to='shop'>
          Go Shopping
        </Link>
      </div>
    </div>
  )
}