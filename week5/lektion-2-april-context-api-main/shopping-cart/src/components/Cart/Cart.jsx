import './Cart.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  console.log(cart);

  return (
    <section className='cart'>
      <Link to={'/cart'}>Cart</Link>
      <p className='cart__amount'>{totalQuantity}</p>
    </section>
  );
}

export default Cart;
