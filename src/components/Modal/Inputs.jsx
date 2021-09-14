import React from 'react';
import styled from 'styled-components';
import GuideText from './GuideText';

function Inputs({ format, setValues, inputValue, onSign }) {
  const emailValid = /^[a-zA-Z\d+-.]+@[a-zA-Z\d+-.]+\.[a-zA-Z]{2,3}$/;
  const pwValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const birthValid = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;

  const isValidInput = item => {
    const { email, emailOk, password, passwordOk, name, birthday } = inputValue;
    const INPUT_VALIDATION_MAP = {
      name: name === '' || (name && name.length > 1),
      birthday: birthday === '' || (birthday && birthValid.test(birthday)),
      email: email === '' || (email && emailValid.test(email)),
      emailOk: emailOk === '' || (emailOk && emailValid.test(emailOk)),
      password: password === '' || (password && pwValid.test(password)),
      passwordOk: passwordOk === '' || (passwordOk && passwordOk === password),
    };

    return INPUT_VALIDATION_MAP[item];
  };

  return (
    <InputAll>
      {format.data.map(input => {
        return (
          <AllInput key={input.id}>
            <Label>{input.text}</Label>
            <InputOver>
              <Input
                onChange={e => setValues(e, input)}
                name={input.name}
                type={input.type}
                placeholder={input.holder}
                value={input.value}
              />
              {input.name === 'emailOk' && (
                <OverlapOk isValidInput={isValidInput}>중복 확인</OverlapOk>
              )}
            </InputOver>
            <GuideText
              name={input.name}
              input={input}
              isValidInput={isValidInput}
            />
          </AllInput>
        );
      })}
      <AuthBtn onClick={() => onSign(format)}>{format.text}</AuthBtn>
    </InputAll>
  );
}

const InputAll = styled.div`
  padding: 0 9px;
  margin: 3px 0 0;
`;

const AllInput = styled.div`
  margin-bottom: 10px;
`;

const InputOver = styled.div`
  display: flex;
`;

const Label = styled.label`
  margin-bottom: 2px;
  padding-left: 4px;
  font-size: 13px;
  color: #858e97;
`;

const OverlapOk = styled.button`
  width: 100px;
  height: 35px;
  margin-left: 10px;
  border: 1px solid #d8d9db;
  border-radius: 5px;
  color: #858e97;
  font-size: 15px;
  cursor: pointer;
  :hover {
    border: 1px solid ${({ theme }) => theme.gray};
    color: ${({ theme }) => theme.gray};
  }
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  padding-right: 5px;
  border-bottom: 1px solid #d8d9db;
  border-radius: 0px;
  line-height: 10px;
  font-size: 22px;
  color: ${({ theme }) => theme.black};

  ::placeholder {
    color: #d8d9db;
    font-weight: 300;
  }
  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.gray};
  }
`;

const AuthBtn = styled.div`
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 8px;
  background-color: ${({ theme }) => theme.main};
  color: #ffff;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
`;

export default Inputs;
