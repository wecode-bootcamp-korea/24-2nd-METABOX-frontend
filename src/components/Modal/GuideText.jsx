import React from 'react';
import styled from 'styled-components';

function GuideText({ isValidInput, input, name }) {
  const valid = isValidInput(name);

  return <>{!valid && <GuidingText>{input.data}</GuidingText>}</>;
}

const GuidingText = styled.p`
  padding-left: 4px;
  margin-top: 5px;
  font-size: 13px;
  color: #f50000;
`;

export default GuideText;
