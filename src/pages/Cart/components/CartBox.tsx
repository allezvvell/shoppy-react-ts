import { Link } from 'react-router';
import Message from '@components/UI/Message';
import SkeletonCart from '@components/skeleton/SkeletonCart';
import CartList from './CartList';
import useCart from '@hooks/redux/useCart';
import useFetchCart from '@hooks/reactQuery/useFetchCart';
import { CartItem } from '@constants/cart';

const CartBox = () => {
  const { cart } = useCart();
  const isCartEmpty = Object.keys(cart).length === 0;
  const querys = useFetchCart(Object.keys(cart));
  const isLoading = querys.some(({ isLoading }) => isLoading);
  const isError = querys.some(({ isError }) => isError);

  const productsInCart = querys.reduce((acc, { data }) => {
    if (data) {
      const { id, image, title, price } = data;
      acc[id] = { image, title, price };
    }
    return acc;
  }, {} as Record<string, Pick<CartItem, 'title' | 'price' | 'image'>>);

  const cartList = Object.entries(cart).map(([_, v]) => ({
    ...v,
    ...productsInCart[v.id],
  }));

  if (isCartEmpty) {
    return (
      <Message>
        <p>장바구니에 물품이 없습니다.</p>
        <Link to={'/'}>쇼핑하기</Link>
      </Message>
    );
  }

  if (isLoading) {
    return <SkeletonCart />;
  }

  if (isError) {
    return <Message />;
  }

  return <CartList list={cartList} />;
};

export default CartBox;
