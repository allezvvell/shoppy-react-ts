import styled from 'styled-components';
import { useNavigate } from 'react-router';
import useDarkMode from '@hooks/state/useDarkMode';

const NotFound = () => {
  const navigate = useNavigate();
  const _darkMode = useDarkMode();
  const onClickButton = () => navigate('/', { replace: true });

  return (
    <StyledNotFound>
      <div>404</div>
      <p>존재하지 않는 페이지 입니다.</p>
      <button onClick={onClickButton}>홈으로</button>
    </StyledNotFound>
  );
};

export default NotFound;

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--bg-main);
  color: var(--text-primary);

  div {
    font-size: 22vw;
  }

  p {
    margin-bottom: 3vw;
    font-size: 6vw;
  }

  button {
    padding: 2vw 4vw;
    background-color: var(--btn-highlight);
    color: #fff;
    border-radius: var(--btn-radius);
  }
`;
