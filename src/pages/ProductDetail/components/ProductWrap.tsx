import styled from 'styled-components';
import { media } from '@components/styles/GlobalStyles';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import { Product } from '@constants/category';

const ProductWrap = (data: Product) => {
  return (
    <Wrap>
      <ProductImage image={data.image} title={data.title} />
      <ProductInfo {...data} />
    </Wrap>
  );
};

export default ProductWrap;

export const Wrap = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr;
  column-gap: 20px;
  padding: 20px;

  ${media.tablet} {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;
