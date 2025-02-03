import styled from 'styled-components';
import { shimmerEffect } from '@components/styles/SkeletonStyles';
import {
  Horizontal,
  Vertical,
  Title,
} from '@components/products/ProductList/styles';
import {
  ListStyle,
  ImageAreaStyle,
  TxtAreaStyle,
} from '@components/products/ProductCard';
import { CATEGORIES, CategoryKey } from '@constants/category';

const SkeletonProductList = ({
  category,
  variant,
  items,
}: {
  category: CategoryKey;
  variant: 'horizontal' | 'vertical';
  items: number;
}) => {
  return variant === 'vertical' ? (
    <Vertical>
      <SkeletonList category={category} items={items} />
    </Vertical>
  ) : (
    <Horizontal>
      <SkeletonList category={category} items={items} />
    </Horizontal>
  );
};

export default SkeletonProductList;

const SkeletonList = ({
  category,
  items,
}: {
  category: CategoryKey;
  items: number;
}) => {
  return (
    <>
      <Title>{CATEGORIES[category]}</Title>
      <ul>
        {Array(items)
          .fill(0)
          .map((_, i) => (
            <SkeletonLi key={i}>
              <SkeletonImage />
              <SkeletonTxt>
                <div></div>
                <div></div>
              </SkeletonTxt>
            </SkeletonLi>
          ))}
      </ul>
    </>
  );
};

const SkeletonLi = styled.li`
  ${ListStyle}
  overflow: hidden;
  flex-direction: column;
  width: 100%;
`;

const SkeletonImage = styled.div`
  ${ImageAreaStyle}
  ${shimmerEffect}
  width: 100%;
`;

const SkeletonTxt = styled.div`
  ${TxtAreaStyle}
  background-color: transparent;

  div {
    width: 90%;
    height: 16px;
    border-radius: 3px;
    ${shimmerEffect}

    &:last-child {
      margin-top: 8px;
      width: 60%;
    }
  }
`;
