/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import IllustrationPage from 'containers/IllustrationPage/Loadable';
import EnvironmentsPage from 'containers/EnvironmentsPage/Loadable';
import VisualDevelopmentPage from 'containers/VisualDevelopmentPage/Loadable';
import LetteringPage from 'containers/LetteringPage/Loadable';
import ComicsPage from 'containers/ComicsPage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Sidebar from 'components/Sidebar';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;

  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
`;

export default function App() {
  return (
    <AppWrapper>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/illustration" component={IllustrationPage} />
        <Route exact path="/environments" component={EnvironmentsPage} />
        <Route exact path="/visualdevelopment" component={VisualDevelopmentPage} />
        <Route exact path="/lettering" component={LetteringPage} />
        <Route exact path="/comics" component={ComicsPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
