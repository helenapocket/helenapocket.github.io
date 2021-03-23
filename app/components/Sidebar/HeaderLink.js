import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-heigh: 18px;
  text-transform: none;
  color: #41576D;
  transition: transform 250ms;

  &:active {
    background: #41addd;
    color: #fff;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;
