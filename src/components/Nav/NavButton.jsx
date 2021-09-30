import React from 'react';
import styled from 'styled-components';

function NavButton(props) {
  const Button = styled.button`
    display: flex;
    width: 40px;
    font-size: 22px;
    border: 0;
    outline: none;
    color: white;
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
    padding: 0 9px;
    margin-top: 10px;
  `;
  if (props.type === 'sitemap') {
    return (
      <Button onClick={props.onClick}>
        {props.isClicked ? (
          <i className="far fa-times-circle"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </Button>
    );
  }
  if (props.type === 'search') {
    return (
      <Button onClick={props.onClick}>
        {props.isClicked ? (
          <i className="far fa-times-circle"></i>
        ) : (
          <i className="fas fa-search"></i>
        )}
      </Button>
    );
  }
}

export default NavButton;
