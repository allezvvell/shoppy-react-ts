import { useParams, Navigate } from 'react-router';
import Category from '.';
import { CategoryKey, CATEGORIES } from '../../constants/category';

const CategoryRedirect = () => {
  const { name } = useParams<{ name: CategoryKey }>();

  if (!name || !CATEGORIES[name]) {
    return <Navigate to="/404" />;
  }

  return <Category category={name} />;
};

export default CategoryRedirect;
