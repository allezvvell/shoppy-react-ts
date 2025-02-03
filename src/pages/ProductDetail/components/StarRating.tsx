import styled from 'styled-components';
import { Rating } from '@constants/category';
import { FaStarHalfAlt, FaRegStar, FaStar } from 'react-icons/fa';

const Ratings = ({ rating }: { rating: Rating }) => {
  const flooredRate = floorToHalf(rating.rate);
  const rateArray = Array.from({ length: 5 }, (_, i) => {
    const filled = Math.floor(flooredRate);
    if (i + 1 <= filled) return 1;
    return filled !== flooredRate && i === filled ? 0 : -1;
  });

  return (
    <RatingsWrap>
      <Stars>
        {rateArray.map((v, i) => (
          <HalfStar key={i} type={v} />
        ))}
      </Stars>
      <span>
        {rating.rate} / {rating.count} 참여
      </span>
    </RatingsWrap>
  );
};

export default Ratings;

const HalfStar = ({ type }: { type: -1 | 0 | 1 }) => {
  return (
    <>
      {type === 1 && <FaStar />}
      {type === 0 && <FaStarHalfAlt />}
      {type === -1 && <FaRegStar />}
    </>
  );
};

const RatingsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;

  & > span {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  font-size: 20px;
  color: #facc15;
`;

function floorToHalf(number: number) {
  const value = Math.floor(number) * 10;
  let rest = (number * 10) % 10;
  rest = rest < 5 ? 0 : 5;
  return (value + rest) / 10;
}
