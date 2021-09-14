import { React, useState } from 'react';
import { GET_LOGIN } from '../../config';
import Modal from '../../components/Modal/Modal';

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
        text: '생년월일 6자리 ex) 931102',
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
    const { name, birthday, emailOk, password } = loginInput;

    if (signup === 'signUp') {
      fetch(`${GET_LOGIN}users/sign-up`, {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          birth_day: birthday,
          email: emailOk,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.MESSAGE === 'SUCCESS') {
            alert('회원가입 성공');
            onClickSignUp();
          } else {
            alert('양식을 다시 한 번 확인해주세요');
          }
        });
    } else {
      fetch(`${GET_LOGIN}users/sign-in`, {
        method: 'POST',
        body: JSON.stringify({
          email: loginInput.email,
          password: loginInput.password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.token) {
            localStorage.setItem('token', res.token);
          }
          if (res.MESSAGE === 'SUCCESS') {
            alert('METABOX에 오신 걸 환영합니다');
            handleModal();
          } else {
            alert('이메일과 비밀번호를 다시 한 번 확인해주세요');
          }
        });
    }
  };

  return (
    <div>
      <button onClick={goToLogin}>로그인</button>
      <button onClick={goToSignUp}>회원가입</button>
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
    </div>
  );
}

export default Nav;
