import React from 'react';
import styled from 'styled-components/macro';
import {Button} from '../../button';
import {breakpoints} from '../../../../styles/breakpoint';

/* Footer data */
import {FooterMenus} from './data.json';

const FooterMenu = () =>
  <__FooterMenu>
    {FooterMenus && FooterMenus.map(footerMenu => <__Button href={footerMenu.link} link
                                                            key={footerMenu.id}>{footerMenu.name}</__Button>)}
  </__FooterMenu>;

export default FooterMenu;

const __FooterMenu = styled.div`
`;

const __Button = styled(Button)`
  padding: 0.313rem;
  color: ${props => props.theme.colors.lightGray};
  display: block;

  @media ${breakpoints.mediumUp} {
    display: inline-block;
  }

  &:first-child {
    padding-left: 0;
  }

  &:after {
    @media ${breakpoints.mediumUp} {
      content: '|';
      padding-left: 0.625rem;
    }
  }

  &:hover {
    &:after {
      color: ${props => props.theme.colors.lightGray};
    }
  }

  &:last-child {
    &:after {
      content: '';
    }
  }
`;