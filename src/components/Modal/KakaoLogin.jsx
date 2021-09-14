import React from 'react';
import { useHistory } from 'react-router-dom';
import { GET_LOGIN } from '../../config';
import styled from 'styled-components';

const { Kakao } = window;

function KakaoLogin() {
  const history = useHistory();
  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${GET_LOGIN}users/sign-in/kakao`, {
          method: 'POST',
          headers: { Authorization: authObj.access_token },
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('Kakao_token', res.token);
            if (res.token) {
              alert('METABOX에 오신걸 환영합니다!');
              history.push('/');
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };
  return (
    <KakaoBtn onClick={kakaoLoginClickHandler}>
      <i class="fas fa-comment"></i> 카카오로 시작하기
    </KakaoBtn>
  );
}

const KakaoBtn = styled.button`
  width: 446px;
  height: 45px;
  margin: 25px 0 10px;
  border: 1px solid transparent;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: #783c00;
  background-color: #ffeb00;
  cursor: pointer;
`;

export default KakaoLogin;
