import React from 'react';
import styled from 'styled-components';
import DynamicDiv from '../DynamicDiv';
import Text from '../Text';
import { Link } from 'react-router-dom';
import colors from '../../config/colors';
import pluginId from '../../pluginId';

const Wrapper = styled(DynamicDiv)`
  background-color: ${colors.grey1};
`;

const SlideMenu = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to={`/plugins/${pluginId}`}>Promo Code</Link>
        </li>
        <li>
          <Link to={`/plugins/${pluginId}/campaign`}>Campaign</Link>
        </li>
      </ul>
    </Wrapper>
  )
};

export default SlideMenu;