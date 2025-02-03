import styled from 'styled-components';
import IconButton from '@components/UI/IconButton';
import { IoBagOutline } from 'react-icons/io5';
import useCart from '@hooks/redux/useCart';

const CartButton = () => {
  const { cart } = useCart();
  const totalCount = Object.values(cart).reduce((acc, curr) => {
    acc += curr.qty;
    return acc;
  }, 0);

  return (
    <ButtonWrap>
      <IconButton to="/cart" font="24px">
        <IoBagOutline />
      </IconButton>
      <span>{totalCount}</span>
    </ButtonWrap>
  );
};

export default CartButton;

const ButtonWrap = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 1px;
    right: 1px;
    padding: 2px 8px 4px;
    background: var(--btn-red);
    font-size: 12px;
    font-weight: var(--font-bold);
    color: #fff;
    line-height: 1;
    border-radius: 12px;
  }
`;
