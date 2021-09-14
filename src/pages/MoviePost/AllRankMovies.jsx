import React from 'react';
import styled from 'styled-components';

function AllRankMovies({ rankMovies }) {
  return (
    <>
      {rankMovies !== [] &&
        rankMovies.map((movie, index) => {
          return (
            <Poster img={movie.poster_image} key={movie.id}>
              <PosterNum>{index + 1}</PosterNum>
              <AllPostText>
                <PosterText>{movie.movie_name}</PosterText>
                <PostText>POST</PostText>
                <PostCount>{movie.post_count}</PostCount>
              </AllPostText>
            </Poster>
          );
        })}
    </>
  );
}

const Poster = styled.div`
  position: relative;
  width: 182px;
  height: 250px;
  margin: 20px 5px 30px 5px;
  background-color: black;
  background-image: url(${props => props.img});
  background-size: cover;
  border-radius: 3px;
  :hover {
    outline: 1.5px solid #ffff;
  }
`;

const PosterNum = styled.p`
  position: absolute;
  width: 35px;
  height: 35px;
  left: 8px;
  top: 3px;
  font-size: 35px;
  font-style: italic;
  font-weight: 500;
  color: #ffff;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const AllPostText = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 182px;
  height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  :hover {
    background-color: rgba(21, 13, 40, 0.8);
    opacity: 1;
  }
`;

const PosterText = styled.h2`
  margin-top: 70px;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: -0.03rem;
  color: #ffff;
  z-index: 9;
`;

const PostText = styled.p`
  margin-top: 30px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: underline;

  color: #ffff;
`;

const PostCount = styled.p`
  margin-bottom: 45px;
  font-size: 42px;
  font-weight: 300;
  letter-spacing: -0.15rem;
  color: #ffff;
`;

export default AllRankMovies;
