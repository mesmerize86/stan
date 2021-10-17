import React from 'react';
import styled from 'styled-components/macro';
import {Col, Col2, GridContainer, Row} from '../grid';
import FooterMenu from './menu';
import {FinePrint} from '../../../styles/fonts';
import FooterSocialIcons from './social-icons';
import FooterStoreIcons from './store';
import { breakpoints } from '../../../styles/breakpoint';

const Footer = () => {
  return (
    <__Footer>
      <GridContainer>
        <Row>
          <Col>
            <FooterMenu/>
          </Col>
        </Row>
        <__FinePrintRow>
          <Col>
            <FinePrint>Copyright &copy; 2016 DEMO Streaming. All Rights reserved.</FinePrint>
          </Col>
        </__FinePrintRow>
        <__IconsRow>
          <__FooterIconsCol>
            <FooterSocialIcons/>
          </__FooterIconsCol>
          <__StoreColumn>
            <FooterStoreIcons />
          </__StoreColumn>
        </__IconsRow>
      </GridContainer>
    </__Footer>
  );
};

export default Footer;

const __Footer = styled.div`
  color: ${props => props.theme.colors.lightGray};
  background-color: ${props => props.theme.colors.grayDark};
  padding: 2.188rem 0 3.438rem;
  text-align: center;
  
  @media ${breakpoints.mediumUp} {
    text-align: left;
  }
  
`;

const __StoreColumn = styled(Col2)`
  width: 100%;
  @media ${breakpoints.mediumUp} {
    text-align: right;
    width: 60%;
  }
`;

const __IconsRow = styled(Row)`
  margin-top: 1.875rem;
`;

const __FinePrintRow = styled(Row)`
  margin-top: 0.5rem;
`;

const __FooterIconsCol = styled(Col2)`
 width: 100%;
  @media ${breakpoints.mediumUp} {
    width: 40%;
  }
`;
