import React from 'react';
import styled from 'styled-components/macro';
import Header from '../component/shared/header';
import Footer from '../component/shared/footer';

const Layout = ({children}) =>
  <>
    <Header/>
    <Content>
      {children}
    </Content>
    <Footer/>
  </>;

export default Layout;

const Content = styled.div`
  display: block;
  width: 100%;
`;