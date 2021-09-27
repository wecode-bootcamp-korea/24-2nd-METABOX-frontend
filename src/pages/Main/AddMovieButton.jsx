import React from 'react';
import styled from 'styled-components';

function AddMovieButton({ display, onAddMovieListClick }) {
  return (
    <AddMovieButtonWrapper isDisplay={display}>
      <AddMovieBtn onClick={onAddMovieListClick}>
        <AddMovieButtonContent>더보기</AddMovieButtonContent>
      </AddMovieBtn>
    </AddMovieButtonWrapper>
  );
}

const AddMovieButtonWrapper = styled.div`
  display: ${props => (props.isDisplay ? 'block' : 'none')};
  width: 1100px;
  margin-top: 30px;
`;

const AddMovieBtn = styled.button`
  width: 100%;
  height: 35px;
  background-color: white;
  border: 1px solid #ddd;
  font-family: NanumBarunGothic, Dotum, '돋움', sans-serif;
  cursor: pointer;
`;

const AddMovieButtonContent = styled.span`
  margin-right: 5px;
  color: #555;
  &: after {
    display: inline-block;
    position: relative;
    left: 8px;
    top: -3px;
    width: 6px;
    height: 6px;
    content: '';
    transform: rotate(45deg);
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: #777;
  }
`;

export default AddMovieButton;
