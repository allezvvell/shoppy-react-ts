import styled from 'styled-components';
import { shimmerEffect } from '@components/styles/SkeletonStyles';
import { Wrap } from '@pages/ProductDetail/components/ProductWrap';
import { ImageWrap } from '@pages/ProductDetail/components/ProductImage';
import { InfoWrap } from '@pages/ProductDetail/components/ProductInfo/styles';

const SkeletonProductDetail = () => {
  return (
    <SkeletonWrap>
      <SkeletonImage />
      <SkeletonInfo>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </SkeletonInfo>
    </SkeletonWrap>
  );
};

export default SkeletonProductDetail;

const SkeletonWrap = styled(Wrap)`
  padding-top: 48px;
`;

const SkeletonImage = styled(ImageWrap)`
  ${shimmerEffect}
`;

const SkeletonInfo = styled(InfoWrap)`
  div {
    margin-top: 20px;
    width: 80%;
    height: 20px;
    border-radius: 3px;
    ${shimmerEffect}

    &:first-child {
      margin-top: 0;
      width: 90%;
    }

    &:last-child {
      width: 40%;
    }
  }
`;
