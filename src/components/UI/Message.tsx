import styled from 'styled-components';
import { ReactNode } from 'react';
import { Link } from 'react-router';

const Message = ({ children }: { children?: ReactNode }) => {
  return (
    <MessageWrap>
      {children ? (
        children
      ) : (
        <>
          요청하신 정보를 가져오는데 실패했습니다.
          <Link to="/">홈으로</Link>
        </>
      )}
    </MessageWrap>
  );
};

export default Message;

const MessageWrap = styled.div`
  padding: 60px 16px;
  margin: 0 auto;
  max-width: var(--main-max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  font-size: 18px;
  color: var(--text-primary);

  a {
    padding: 8px 16px;
    font-size: 14px;
    color: #fff;
    background-color: var(--btn-highlight);
    border-radius: 4px;
    transition: all 200ms;

    &:hover {
      background-color: var(--btn-highlight-hover);
    }
  }
`;
