import { CategoryKey, CATEGORIES, Product } from '@constants/category';
import { Horizontal, Vertical, Title } from './styles';
import ProductCard from '../ProductCard';

interface Props {
  category: CategoryKey;
  variant: 'horizontal' | 'vertical';
  products: Product[];
}

const ProductList = ({ category, variant, products }: Props) => {
  return variant === 'horizontal' ? (
    <Horizontal>
      <Title>{CATEGORIES[category]}</Title>
      <ul>
        {products?.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </ul>
    </Horizontal>
  ) : (
    <Vertical>
      <Title>{CATEGORIES[category]}</Title>
      <ul>
        {products?.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </ul>
    </Vertical>
  );
};

export default ProductList;
