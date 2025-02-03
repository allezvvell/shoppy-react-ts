import styled from 'styled-components';
import { ListWrap, List } from '@pages/Cart/components/CartList/styles';
import {
  ItemLi,
  ImageWrap,
  InfoWrap,
} from '@pages/Cart/components/CartItem/styles';
import { shimmerEffect } from '@components/styles/SkeletonStyles';

const SkeletonCart = () => {
  return (
    <ListWrap>
      <List>
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <ItemLi key={i}>
              <SkeletonImage />
              <SkeletonInfo>
                <div></div>
                <div></div>
                <div></div>
              </SkeletonInfo>
            </ItemLi>
          ))}
      </List>
    </ListWrap>
  );
};

export default SkeletonCart;

const SkeletonImage = styled(ImageWrap)`
  ${shimmerEffect}
`;

const SkeletonInfo = styled(InfoWrap)`
  div {
    ${shimmerEffect}
    margin-bottom: 16px;
    max-width: 800px;
    height: 16px;
    border-radius: 4px;

    &:last-child {
      width: 60%;
    }
  }
`;
