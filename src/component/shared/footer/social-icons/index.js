import React from 'react';
import styled from 'styled-components/macro';
import {Button} from '../../button';
import {SocialIcons} from './data.json';

const FooterSocialIcons = () =>
  <>
    {SocialIcons && SocialIcons.map(store => <Button key={store.id} link>
      <StoreIcon src={store.image_url} alt={store.alt}/>
    </Button>)
    }
  </>

export default FooterSocialIcons;

const StoreIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 10px;

  &:hover {
    fill: red;
  }
`;