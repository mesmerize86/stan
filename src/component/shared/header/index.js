import React from 'react';
import styled from 'styled-components/macro';
import TopBar from '../../ui/topbar';
import PromotionBar from '../../ui/PromotionBar';

const Header = () => {
  return (
    <__Header>
      <TopBar />
      <PromotionBar />
    </__Header>
  );
};

export default Header;

const __Header = styled.div`
`;

