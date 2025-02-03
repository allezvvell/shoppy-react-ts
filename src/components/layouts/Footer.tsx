import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';

const CARDS = [
  'americanExpress',
  'dinersClub',
  'discover',
  'master',
  'paypal',
  'visa',
];

const SNS = [
  {
    name: 'facebook',
    link: 'https://github.com/allezvvell',
    icon: <FaFacebookF />,
  },
  {
    name: 'instagram',
    link: 'https://github.com/allezvvell',
    icon: <FaInstagram />,
  },
  { name: 'github', link: 'https://github.com/allezvvell', icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <StyledFooter>
      <CardList>
        {CARDS.map((c) => (
          <img key={c} src={`src/assets/img/svg/${c}.svg`} title={c} />
        ))}
      </CardList>
      <SocialList>
        {SNS.map(({ icon, link, name }) => (
          <a href={link} target="_blank" key={name} rel="noopener npreferrer">
            <span>{name}</span>
            {icon}
          </a>
        ))}
      </SocialList>
      <p>Copyright © 2025 https://github.com/allezvvell</p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: var(--footer-height);
  background-color: var(--bg-footer);
  color: var(--text-primary);

  & > p {
    font-size: 12px;
  }
`;

const CardList = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 36px;

  img {
    width: 40px;
  }
`;

const SocialList = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 28px;

  a {
    position: relative;
    display: flex;
    color: var(--text-primary);
    font-size: 24px;

    &:hover {
      span {
        opacity: 1;
      }
    }

    span {
      position: absolute;
      top: 0;
      left: 50%;
      padding: 4px 6px;
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      font-size: 12px;
      border-radius: 2px;
      transform: translate(-50%, calc(-100% - 4px));
      opacity: 0;
      transition: all 200ms;
    }
  }
`;
