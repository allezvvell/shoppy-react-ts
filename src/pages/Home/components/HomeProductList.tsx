import ProductList from '@components/products/ProductList';
import SkeletonProductList from '@components/skeleton/SkeletonProductList';
import Message from '@components/UI/Message';
import { CategoryKey } from '@constants/category';
import useFetchCategory from '@hooks/reactQuery/useFetchCategory';

const HomeProductList = ({ category }: { category: CategoryKey }) => {
  const { isLoading, error, data } = useFetchCategory(category, 4);

  if (isLoading) {
    return (
      <SkeletonProductList category={category} variant="horizontal" items={4} />
    );
  }

  if (error) {
    return <Message>데이터를 불러오지 못했습니다.</Message>;
  }

  return (
    <ProductList variant="horizontal" category={category} products={data!} />
  );
};

export default HomeProductList;
