import { CartItem as Item } from '@constants/cart';
import CartItem from '../CartItem';
import { ListWrap, List, Checkout } from './styles';

const CartList = ({ list }: { list: Item[] }) => {
  const totalPrice = list.reduce((acc, curr) => {
    acc += curr.price * curr.qty;
    return parseFloat(acc.toFixed(2));
  }, 0);

  return (
    <ListWrap>
      <List>
        {list.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </List>
      <Checkout>
        <p>TOTAL : ${totalPrice}</p>
        <button>구매하기</button>
      </Checkout>
    </ListWrap>
  );
};

export default CartList;
