import Container from '@components/UI/Container';
import Slider from './components/Slider';
import HomeProductList from './components/HomeProductList';
import { CATEGORY_MAP, CategoryKey } from '@constants/category';

const Home = () => {
  return (
    <>
      <Slider />
      <Container>
        {Object.keys(CATEGORY_MAP).map((c) => (
          <HomeProductList key={c} category={c as CategoryKey} />
        ))}
      </Container>
    </>
  );
};

export default Home;
