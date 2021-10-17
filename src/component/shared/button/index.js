import React from 'react';
import styled, {css} from 'styled-components/macro';

const Button = (props) =>
  <__Button {...props}>{props.children}</__Button>;

const __Button = styled.a`
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.brand};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.font_body_small};
  padding: 8px 12px;
  display: inline-block;

  ${props => props.link && css`
    background-color: unset;
    text-decoration: none;
    padding: unset;

    &:hover {
      color: ${props.theme.colors.brand};
    }
  `};

  ${props => props.gray && css`
    background-color: ${props => props.theme.colors.grayDark};
    color: ${(props) => props.theme.colors.white};

    &:hover {
      background-color: ${props => props.theme.colors.grayDarker};
    }
  `}
`;

export {Button};