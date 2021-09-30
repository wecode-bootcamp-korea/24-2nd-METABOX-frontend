import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { API } from '../../config';
import { customFetch } from '../../utils/api';
import Modal from '../../components/Modal/Modal';
import SiteMap from './SiteMap';
import SearchBar from './SearchBar';
import NavButton from './NavButton';
import styled from 'styled-components';

const INITIAL_INPUT = {
  name: '',
  birthday: '',
  email: '',
  emailOk: '',
  password: '',
  passwordOk: '',
};

function Nav() {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginInput, setLoginInput] = useState(INITIAL_INPUT);

  const LOGIN = {
    type: 'login',
    text: '로그인',
    data: [
      {
        type: 'email',
        name: 'email',
        value: loginInput.email,
        text: '이메일',
        holder: '이메일',
        data: '정확하지 않은 이메일 형식입니다.',
      },
      {
        type: 'password',
        name: 'password',
        value: loginInput.password,
        text: '비밀번호',
        holder: '비밀번호',
        data: '비밀번호는 영문,숫자,특수문자를 조합하여 8~12자로 구성하세요.',
      },
    ],
  };

  const SIGNUP = {
    type: 'signUp',
    text: '회원가입',
    data: [
      {
        type: 'name',
        name: 'name',
        value: loginInput.name,
        text: '이름',
        holder: '이름',
        data: '정확하지 않은 이름입니다.',
      },
      {
        type: 'birthday',
        name: 'birthday',
        value: loginInput.birthday,
        text: '생년월일 8자리 ex) 1990-05-05',
        holder: '생년월일',
        data: '정확하지 않은 생년월일입니다.',
      },
      {
        type: 'email',
        name: 'emailOk',
        value: loginInput.emailOk,
        text: '이메일',
        holder: '이메일',
        data: '정확하지 않은 이메일입니다.',
      },
      {
        type: 'password',
        name: 'password',
        value: loginInput.password,
        text: '비밀번호',
        holder: '비밀번호',
        data: '비밀번호는 영문,숫자,특수문자를 조합하여 8~12자로 구성하세요.',
      },
      {
        type: 'password',
        name: 'passwordOk',
        value: loginInput.passwordOk,
        text: '비밀번호 확인',
        holder: '비밀번호를 다시 한 번 입력해주세요',
        data: '비밀번호를 한 번 더 확인해주세요.',
      },
    ],
  };

  const setValues = e => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const loginSetup = () => {
    setLoginInput(prev => ({
      ...prev,
      name: '',
      birthday: '',
      email: '',
      emailOk: '',
      password: '',
      passwordOk: '',
    }));

    setShowModal(prev => !prev);
  };

  const goToLogin = () => {
    setIsSignUp(false);
    loginSetup();
  };

  const goToSignUp = () => {
    setIsSignUp(true);
    loginSetup();
  };

  const handleModal = () => {
    setShowModal(prev => !prev);
  };

  const onClickSignUp = () => {
    setLoginInput(prev => ({
      ...prev,
      name: '',
      birthday: '',
      email: '',
      emailOk: '',
      password: '',
      passwordOk: '',
    }));
    setIsSignUp(prev => !prev);
  };

  const onClickWindow = e => {
    const clicked = e.target.closest('.modal');
    if (clicked) {
      return;
    }
    handleModal();
  };

  const onSign = format => {
    const signup = format.type;

    if (signup === 'signUp') {
      requestSignup(loginInput);
    } else {
      requestSignIn(loginInput);
    }
  };

  const requestSignup = loginInput => {
    const { name, birthday, emailOk, password } = loginInput;
    customFetch(
      API.SIGNUP,
      {
        body: JSON.stringify({
          name: name,
          birth_day: birthday,
          email: emailOk,
          password: password,
        }),
      },
      {
        onSuccess: res => {
          if (res.MESSAGE === 'SUCCESS') {
            alert('회원가입 성공');
            onClickSignUp();
          } else {
            alert('양식을 다시 한 번 확인해주세요');
          }
        },
      }
    );
  };

  const requestSignIn = loginInput => {
    const { email, password } = loginInput;
    customFetch(API.SIGNIN, {
      body: JSON.stringify(
        {
          email: email,
          password: password,
        },
        {
          onSuccess: res => {
            if (res.token) {
              localStorage.setItem('token', res.token);
            }
            if (res.MESSAGE === 'SUCCESS') {
              alert('METABOX에 오신 걸 환영합니다');
              handleModal();
            } else {
              alert('이메일과 비밀번호를 다시 한 번 확인해주세요');
            }
          },
        }
      ),
    });
  };

  const [isSiteMapClicked, setIsSiteMapClicked] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const onSiteMapClick = () => {
    if (isSearchClicked) setIsSearchClicked(!isSearchClicked);
    setIsSiteMapClicked(!isSiteMapClicked);
  };

  const onSearchClick = () => {
    if (isSiteMapClicked) setIsSiteMapClicked(!isSiteMapClicked);
    setIsSearchClicked(!isSearchClicked);
  };

  return (
    <>
      <Navigator>
        {showModal && (
          <Modal
            handleModal={handleModal}
            onClickWindow={onClickWindow}
            isSignUp={isSignUp}
            onClickSignUp={onClickSignUp}
            setValues={setValues}
            inputValue={loginInput}
            format={isSignUp ? SIGNUP : LOGIN}
            onSign={onSign}
          />
        )}
        <Container>
          <UserSupportWrapper>
            <div>
              <CustomerServiceLink to="">VIP LOUNGE</CustomerServiceLink>
              <CustomerServiceLink to="">멤버쉽</CustomerServiceLink>
              <CustomerServiceLink to="">고객센터</CustomerServiceLink>
            </div>
            <div>
              <UserLink to="/" onClick={goToLogin}>
                로그인
              </UserLink>
              <UserLink to="/" onClick={goToSignUp}>
                회원가입
              </UserLink>
              <UserLink to="/booking">빠른예매</UserLink>
            </div>
          </UserSupportWrapper>
          <CategoryWrapper>
            <CategorySubWrapper>
              <NavButton
                onClick={onSiteMapClick}
                isClicked={isSiteMapClicked}
                type={'sitemap'}
              ></NavButton>
              <NavButton
                onClick={onSearchClick}
                isClicked={isSearchClicked}
                type={'search'}
              ></NavButton>
              <Categories>
                {leftCategoryList.map((category, index) => (
                  <LeftCategory key={index}>
                    <LowerLeftLink
                      to={category.name === '무비포스트' && '/moviepost'}
                    >
                      {category.name}
                    </LowerLeftLink>
                  </LeftCategory>
                ))}
              </Categories>
            </CategorySubWrapper>
            <Link to="">
              <Logo
                src={process.env.PUBLIC_URL + '/image/full_logo_white.png'}
                alt="full_logo_white"
              />
            </Link>
            <CategorySubWrapper>
              <Categories>
                {rightCategoryList.map((category, index) => (
                  <RightCategory key={index}>
                    <LowerRightLink to="">{category.name}</LowerRightLink>
                  </RightCategory>
                ))}
              </Categories>
              <Button>
                <i className="fas fa-table"></i>
              </Button>
              <Button>
                <i className="far fa-user"></i>
              </Button>
            </CategorySubWrapper>
          </CategoryWrapper>
        </Container>
        <SiteMap isDisplayed={isSiteMapClicked}></SiteMap>
        <SearchBar isDisplayed={isSearchClicked}></SearchBar>
      </Navigator>
    </>
  );
}
export default withRouter(Nav);

const leftCategoryList = [
  {
    name: '영화',
    subcategories: ['전체영화', 'N스크린', '큐레이션', '무비포스트'],
  },
  {
    name: '예매',
    subcategories: ['빠른예매', '상영시간표', '더 부티크 프라이빗 예매'],
  },
  {
    name: '무비포스트',
    subcategories: ['전체극장', '특별관'],
  },
];

const rightCategoryList = [
  {
    name: '이벤트',
    subcategories: ['진행중 이벤트', '지난 이벤트', '당첨자발표'],
  },
  {
    name: '스토어',
    subcategories: [],
  },
  {
    name: '혜택',
    subcategories: ['메가박스 멤버십', '제휴/할인'],
  },
];

const Logo = styled.img`
  width: 160px;
  position: absolute;
  left: 50%;
  transform: translate(-60%);
  top: 7px;
`;

const Navigator = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #3b2a77;
`;

const Container = styled.div`
  position: relative;
  min-width: 1100px;
  margin-top: 10px;
`;

const UserSupportWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  max-width: 100%;
  padding: 0;
  font-size: 1.05em;
`;

const CategoryWrapper = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CustomerServiceLink = styled(Link)`
  margin-right: 20px;
  font-size: 0.75em;
  color: #ffff;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;

const UserLink = styled(Link)`
  margin-left: 20px;
  font-size: 0.75em;
  color: #ffff;
  cursor: pointer;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;

const LowerLeftLink = styled(Link)`
  font-size: 1.1em;
  font-weight: bold;
  color: white;
`;

const LowerRightLink = styled(Link)`
  font-size: 1.1em;
  font-weight: bold;
  color: white;
`;

const Categories = styled.ul`
  display: flex;
  align-items: start;
  padding-right: 45px;
  padding-left: 45px;
  height: 46px;
`;
const LeftCategory = styled.li`
  position: relative;
  margin-left: 45px;
  padding-top: 5px;
  padding-bottom: 11px;
`;

const RightCategory = styled.li`
  position: relative;
  margin-right: 52px;
  padding-top: 5px;
  padding-bottom: 11px;
`;

const CategorySubWrapper = styled.div`
  display: flex;
`;
const Button = styled.button`
  display: flex;
  border: 0;
  outline: none;
  color: white;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  font-size: 22px;
  padding: 0 9px;
  margin-top: 5px;
`;
