import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import fashionImg from '@assets/img/slider/img_shop_fashion.jpeg';
import accessoryImg from '@assets/img/slider/img_shop_accessory.jpg';
import digitalImg from '@assets/img/slider/img_shop_digital.jpeg';
import { SliderBox, SliderImage, SliderContent } from './styles';
import Slide from '@utils/Slider';

const ITEMS = [
  {
    title: '물빠진 청바지!',
    content: '이제 막 도착한 패션 청바지를 구경해 보세요.',
    image: fashionImg,
    category: 'fashion',
  },
  {
    title: '신속한 업무 처리!',
    content: '다양한 디지털 상품을 둘러보세요.',
    image: digitalImg,
    category: 'digital',
  },
  {
    title: '다양한 악세서리!',
    content: '다양한 종류의 악세서리를 만나보세요.',
    image: accessoryImg,
    category: 'accessory',
  },
];

const Slider = () => {
  const sliderEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slide = new Slide(sliderEl.current!);

    return () => slide.pause();
  }, []);

  return (
    <SliderBox ref={sliderEl}>
      <ul className="slider-wrap">
        {ITEMS.map(({ title, content, image, category }) => (
          <li key={title} className="slider-item">
            <SliderImage src={image} alt={category} />
            <SliderContent>
              <div>
                <h2>{title}</h2>
                <p>{content}</p>
                <Link to={`/category/${category}`}>바로가기</Link>
              </div>
            </SliderContent>
          </li>
        ))}
      </ul>
    </SliderBox>
  );
};

export default Slider;
