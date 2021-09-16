import React from 'react';
import styled from 'styled-components';

function Movie() {
  return (
    <div>
      <SubTitle>영화</SubTitle>
      <Wrapper>
        <Button>전체</Button>
        <CurationButton>큐레이션</CurationButton>
        <MovieList>
          <MovieItem>해리포터와 마법사돌</MovieItem>
        </MovieList>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const SubTitle = styled.h3`
  font-size: 16px;
`;

const Button = styled.button`
  display: block;
  height: 30px;
  padding: 0 25px;
  border: 1px solid #666;
  border-bottom: 0;
  font-size: 11px;
`;

const CurationButton = styled(Button)`
  border: 1px solid #d9d8dd;
  border-bottom: 1px solid #666;
`;

const MovieList = styled.ul``;
const MovieItem = styled.li``;

export default Movie;
