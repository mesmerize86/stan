import React from 'react';
import styled from 'styled-components/macro';
import { breakpoints } from '../../../styles/breakpoint';

const GridContainer = ({children}) => <__GridContainer>
  {children}
</__GridContainer>

const __GridContainer = styled.div`
  max-width: 767px;
  margin: 0 auto;
  padding: 0 0.625rem;
  @media ${breakpoints.largeUp} {
    max-width:990px;
  }

  @media ${breakpoints.xlargeUp} {
    max-width:1120px
  }
`;

const Row = styled.div`
  &:after {
    content: "";
    visibility: hidden;
    display: block;
    clear: both;
  }
`;

const Col =  styled.div`
  width: 100%;
`;

const Col2 = styled.div`
  width: 50%;
  float: left;
`;

const Col3 = styled.div`
  width: 33.3%;
  float: left;
`;

export {GridContainer, Row, Col, Col2, Col3};