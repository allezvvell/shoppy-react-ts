import styled, { css } from 'styled-components';
import { Product } from '@constants/category';
import { Link } from 'react-router';
import { media } from '@components/styles/GlobalStyles';

const ProductCard = ({ title, price, id, image }: Product) => {
  return (
    <Li>
      <Link to={`/product/${id}`}>
        <ImageArea>
          <img src={image} alt={title} />
        </ImageArea>
        <TxtArea>
          <p>{title}</p>
          <span>${price}</span>
        </TxtArea>
      </Link>
    </Li>
  );
};

export default ProductCard;

export const ListStyle = css`
  display: flex;
  align-content: stretch;
  overflow: hidden;
  border: 1px solid var(--bg-card);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  a {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const Li = styled.li`
  ${ListStyle}

  a {
    &:hover img {
      transition: all 300ms ease-in-out;
      transform: scale(1.1);
    }
  }
`;

export const ImageAreaStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 280px;

  ${media.mobile} {
    height: 240px;
  }
`;

const ImageArea = styled.div`
  ${ImageAreaStyle}

  img {
    display: block;
    max-width: 65%;
    max-height: 65%;
  }
`;

export const TxtAreaStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  padding: 16px 12px;
  background-color: var(--bg-card);
  color: var(--text-primary);
  p {
    font-weight: var(--font-bold);
  }
`;

const TxtArea = styled.div`
  ${TxtAreaStyle}
`;
