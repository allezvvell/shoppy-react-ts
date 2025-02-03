import { CategoryKey } from '../../constants/category';
import { CATEGORIES } from '../../constants/category';
import Container from '@components/UI/Container';
import Breadcrumb from '@components/layouts/Breadcrumb';
import CategoryProductList from './components/CategoryProductList';

const Category = ({ category }: { category: CategoryKey }) => {
  return (
    <Container>
      <Breadcrumb path={['홈', CATEGORIES[category]]} />
      <CategoryProductList category={category} />
    </Container>
  );
};

export default Category;
