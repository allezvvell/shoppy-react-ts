import { useCallback } from 'react';
import { Link } from 'react-router';
import { ItemLi, ImageWrap, InfoWrap, ButtonGroup, Controls } from './styles';
import { CartItem as Item } from '@constants/cart';
import { FaPlus, FaMinus, FaRegTrashAlt } from 'react-icons/fa';
import useCart from '@hooks/redux/useCart';

const CartItem = ({ id, qty, title, price, image }: Item) => {
  const { addProduct, decrementProduct, removeProduct } = useCart();

  const onPlusBtnClick = useCallback(() => {
    addProduct(id);
  }, []);
  const onMinusBtnClick = useCallback(() => {
    decrementProduct(id);
  }, [qty]);
  const onDeleteBtnClick = useCallback(() => {
    removeProduct(id);
  }, []);

  return (
    <ItemLi>
      <ImageWrap>
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </ImageWrap>
      <InfoWrap>
        <h3>{title}</h3>
        <p>${price * qty}</p>
        <ButtonGroup>
          <Controls>
            <button
              className="decrease"
              disabled={qty === 1}
              onClick={onMinusBtnClick}
            >
              <FaMinus />
            </button>
            <span>{qty}</span>
            <button className="increase" onClick={onPlusBtnClick}>
              <FaPlus />
            </button>
          </Controls>
          <button className="delete" onClick={onDeleteBtnClick}>
            <FaRegTrashAlt />
          </button>
        </ButtonGroup>
      </InfoWrap>
    </ItemLi>
  );
};

export default CartItem;
