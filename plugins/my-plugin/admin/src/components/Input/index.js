import React from 'react';
import styled from 'styled-components';
import colors from '../../config/colors';

const StyledInput = styled.input`
  border: 1px solid ${colors.dark1};
  border-radius: 5px;
`;

const Input = props => {

  return (
    <StyledInput />
  );
};

export default Input;