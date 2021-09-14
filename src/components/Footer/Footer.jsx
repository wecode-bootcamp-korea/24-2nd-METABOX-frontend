import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

function Footer() {
  return (
    <FooterBackground>
      <FooterContents>
        <FooterLogo
          src={process.env.PUBLIC_URL + '/image/full_logo_color.png'}
          alt="메타박스 로고"
        />
        <FooterText>
          <span>
            서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점) 3층
          </span>
          <span>프론트 엔드 : 김동준 · 김영현 · 이송현 </span>
          <span> 백엔드 : 송치헌 · 윤현묵 · 주종민</span>
          <span>COPYRIGHT © Metabox, Inc. All rights reserved</span>
        </FooterText>
        <AllLink>
          <UseLink
            onClick={() =>
              window.open(
                'https://github.com/wecode-bootcamp-korea/24-2nd-METABOX-frontend',
                '_blank'
              )
            }
          >
            <i class="fab fa-github"></i>
            <GitText>Front-end Github</GitText>
          </UseLink>
          <UseLink
            onClick={() =>
              window.open(
                'https://github.com/wecode-bootcamp-korea/24-2nd-METABOX-backend',
                '_blank'
              )
            }
          >
            <i class="fab fa-github"></i> <GitText>Back-end Github</GitText>
          </UseLink>
        </AllLink>
      </FooterContents>
    </FooterBackground>
  );
}

const FooterBackground = styled.div`
  background-color: #f8f8fa;
  margin-top: 50px;
  padding: 40px 0;
`;

const FooterContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1110px;
  margin: 0 auto;
`;

const FooterLogo = styled.img`
  width: 210px;
  opacity: 0.4;
`;

const FooterText = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0 340px 0 0;
  font-size: 14px;
  color: ${({ theme }) => theme.gray};
  opacity: 0.8;

  & span {
    margin-top: 1px;
  }
`;

const AllLink = styled.div`
  display: flex;
`;

const UseLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  margin-left: 15px;
  font-size: 50px;
  color: ${({ theme }) => theme.gray};
  opacity: 0.6;
  cursor: pointer;
`;

const GitText = styled.span`
  margin-top: 8px;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
`;
export default withRouter(Footer);
