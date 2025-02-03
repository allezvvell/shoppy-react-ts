import { useCallback } from 'react';
import { Link } from 'react-router';
import { Product } from '@constants/category';
import { InfoWrap, CartButtons } from './styles';
import StarRating from '../StarRating';
import useCart from '@hooks/redux/useCart';

const ProductInfo = ({ title, price, rating, description, id }: Product) => {
  const { addProduct } = useCart();

  const onButtonClick = useCallback(() => {
    addProduct(id);
  }, []);

  return (
    <InfoWrap>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>${price}</span>
      <StarRating rating={rating} />
      <CartButtons>
        <button onClick={onButtonClick}>장바구니에 담기</button>
        <Link to={'/cart'}>장바구니로 이동</Link>
      </CartButtons>
    </InfoWrap>
  );
};

export default ProductInfo;
