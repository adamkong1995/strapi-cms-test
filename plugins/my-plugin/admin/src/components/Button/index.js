import React from 'react';
import styled from 'styled-components';
import colors from '../../config/colors';
import DynamicDiv from '../DynamicDiv';
import Text from '../Text';
import { motion } from 'framer-motion';


const StyledButton = styled(motion.button)`
  background-color: ${props => props.color || colors.blue1};
  border-radius: 5px;
  padding: ${props => props.padding || '5px 10px'};
`;

const Button = ({ color, disabled, label, isLoading, mMarginTop, mMarginBottom, mMarginLeft, mMarginRight, onClick, ...props }) => {
  return (
    <DynamicDiv mMarginTop={mMarginTop} mMarginBottom={mMarginBottom} mMarginLeft={mMarginLeft} mMarginRight={mMarginRight}>
      <StyledButton disabled={onClick || disabled} onClick={onClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} {...props}>{
        isLoading ? 
        <div>Loading</div> :
        <Text color={color}>{label}</Text>
      }</StyledButton>
    </DynamicDiv>
  );
};

export default Button;