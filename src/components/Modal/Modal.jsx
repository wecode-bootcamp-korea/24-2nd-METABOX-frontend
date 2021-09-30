import React from 'react';
import styled, { keyframes } from 'styled-components';
import Form from './Form';

function Modal({
  handleModal,
  onClickWindow,
  isSignUp,
  onClickSignUp,
  setValues,
  inputValue,
  format,
  onSign,
}) {
  return (
    <Container onClick={onClickWindow}>
      <ContainerBox className="modal">
        <Form
          format={format}
          handleModal={handleModal}
          isSignUp={isSignUp}
          onClickSignUp={onClickSignUp}
          setValues={setValues}
          inputValue={inputValue}
          onSign={onSign}
        />
      </ContainerBox>
    </Container>
  );
}

const ModalShow = keyframes`
  from {
    opacity: 0;
    margin-top: -20px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const ModalBgShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  animation: ${ModalBgShow} 0.3s;
  z-index: 1000;
`;

const ContainerBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -50%);
  animation: ${ModalShow} 0.6s;
  z-index: 1;
`;

export default Modal;
