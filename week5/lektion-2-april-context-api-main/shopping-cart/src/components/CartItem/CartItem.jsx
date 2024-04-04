import './CartItem.css';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';
import { useDispatch } from 'react-redux';
import { addToCart, increaseQuantity, decreaseQuantity } from '../../reducers/cartReducer';

function CartItem(props) {
  const dispatch = useDispatch();
  const { item } = props;

  return (
    <article className='cart-item'>
      <h3 className='cart-item-title'>
        {item.title}
        <span className='dots'></span>
      </h3>
      <p className='cart-item-desc'>{item.totalPrice} kr</p>
      <aside className='item-quantity'>
        <img src={arrowUp} alt='increase' onClick={() => dispatch(increaseQuantity(item))} />
        <p className='quantity'>{item.quantity}</p>{' '}
        <img src={arrowDown} alt='decrease' onClick={() => dispatch(decreaseQuantity(item))}/>{' '}
      </aside>
    </article>
  );
}

export default CartItem;
