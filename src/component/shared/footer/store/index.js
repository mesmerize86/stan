import React from 'react';
import styled from 'styled-components/macro';
import {Button} from '../../button';
import {StoreIcons} from './data.json';
import {breakpoints} from '../../../../styles/breakpoint';

const FooterSocialIcons = () =>
  <>
    {StoreIcons && StoreIcons.map(store => <__ImageLink link key={store.id}>
      <SocialIcon src={store.image_url} alt={store.alt}/>
    </__ImageLink>)
    }
  </>

export default FooterSocialIcons;

const SocialIcon = styled.img`
  height: 40px;
  padding: 10px;
`;

const __ImageLink = styled(Button)`
  display: block;
  &:last-child {
    ${SocialIcon} {
      padding-right: 0;
    }
  }
  
  @media ${breakpoints.mediumUp}{
    display: inline-block;
  }
`;

