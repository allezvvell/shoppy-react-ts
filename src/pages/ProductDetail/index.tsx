import { useParams } from 'react-router';

import Breadcrumb from '@components/layouts/Breadcrumb';
import Container from '@components/UI/Container';
import Message from '@components/UI/Message';
import ProductWrap from './components/ProductWrap';
import SkeletonProductDetail from '@components/skeleton/SkeletonProductDetail';
import useFetchProduct from '@hooks/reactQuery/useFetchProduct';

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchProduct(id!);

  if (isLoading) {
    return (
      <Container>
        <SkeletonProductDetail />
      </Container>
    );
  }

  if (error || !data) {
    return <Message />;
  }

  return (
    <Container>
      <Breadcrumb path={[data?.category!, data?.title!]} />
      <ProductWrap {...data} />
    </Container>
  );
};

export default ProductDetail;
