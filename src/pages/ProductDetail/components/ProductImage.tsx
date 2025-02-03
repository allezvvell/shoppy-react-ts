import styled from 'styled-components';

const ProductImage = ({ image, title }: { image: string; title: string }) => {
  return (
    <ImageWrap>
      <img src={image} alt={title} />
    </ImageWrap>
  );
};

export default ProductImage;

export const ImageWrap = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  border-radius: 12px;
  background-color: #fff;

  img {
    display: block;
    max-width: 90%;
    max-height: 90%;
  }
`;
