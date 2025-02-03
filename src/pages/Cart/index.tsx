import Container from '@components/UI/Container';
import CartBox from './components/CartBox';
import Breadcrumb from '@components/layouts/Breadcrumb';

const Cart = () => {
  return (
    <Container>
      <Breadcrumb path={['홈', '장바구니']} />
      <CartBox />
    </Container>
  );
};

export default Cart;
