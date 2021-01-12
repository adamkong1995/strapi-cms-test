/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from 'strapi-helper-plugin';
// Utils
import pluginId from '../../pluginId';
// Containers
import HomePage from '../HomePage';
import SlideMenu from '../../components/SlideMenu';
import styled from 'styled-components';
import DynamicDiv from '../../components/DynamicDiv';

const Wrapper = styled(DynamicDiv)`
  height: calc(100vh - 6rem);
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const App = () => {
  return (
    <Wrapper>
      <SlideMenu />
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route component={NotFound} />
      </Switch>
    </Wrapper>
  );
};

export default App;
