import { React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Inputs from './Inputs';
import KakaoLogin from './KakaoLogin';

function Form({
  format,
  handleModal,
  isSignUp,
  onClickSignUp,
  setValues,
  inputValue,
  onSign,
}) {
  return (
    <>
      <TitleWrapper>
        <Title>{format.text}</Title>
        <CloseBtn onClick={handleModal}>&times;</CloseBtn>
      </TitleWrapper>
      <InputContainer>
        <Inputs
          format={format}
          setValues={setValues}
          inputValue={inputValue}
          onSign={onSign}
        />
        <LinkBox>
          {
            <>
              {isSignUp ? '회원이신가요?' : '아직 회원이 아니신가요?'}&nbsp;
              <SignLink to="/" onClick={onClickSignUp}>
                {isSignUp ? '로그인' : '회원가입'}
              </SignLink>
            </>
          }
          <OrLine></OrLine>
          <KakaoLogin handleModal={handleModal} />
        </LinkBox>
      </InputContainer>
    </>
  );
}

const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  color: #ffff;
  background-color: ${({ theme }) => theme.main};
`;

const Title = styled.span`
  margin: 12px 25px 10px;
  font-size: 20px;
  color: #ffff;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 15px;
  outline: none;
  cursor: pointer;
  border: 0;
  font-size: 30px;
  color: #ffff;
`;

const InputContainer = styled.div`
  padding: 18px;
  background: white;
`;

const LinkBox = styled.div`
  margin: 5px 9px 0;
  font-size: 15.5px;
  letter-spacing: -0.02rem;
  text-align: right;
  color: gray;
`;

const OrLine = styled.div`
  position: relative;
  margin: 20px 0 38px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;

  &:before {
    position: absolute;
    left: 0;
    top: 12px;
    content: '';
    width: 100%;
    border-bottom: 1px solid #bdbdbd;
  }
  &:after {
    position: absolute;
    width: 60px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    content: 'or';
    color: #a3a3a3;
    background-color: #ffff;
  }
`;

const SignLink = styled(Link)`
  color: gray;
  &:hover {
    color: ${({ theme }) => theme.gray};
    font-weight: 500;
    text-decoration: underline;
  }
  cursor: pointer;
`;

export default Form;
