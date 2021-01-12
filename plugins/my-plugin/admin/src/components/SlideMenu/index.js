import React from 'react';
import styled from 'styled-components';
import DynamicDiv from '../DynamicDiv';
import Text from '../Text';
import { Link } from 'react-router-dom';
import colors from '../../config/colors';

const Wrapper = styled(DynamicDiv)`
  background-color: ${colors.grey1};
`;

const SlideMenu = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to={'/'}>Promo Code</Link>
        </li>
        <li>
          <Link to={'/2'}>Home2</Link>
        </li>
      </ul>
    </Wrapper>
  )
};

export default SlideMenu;