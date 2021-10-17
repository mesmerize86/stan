import React from 'react';
import styled from 'styled-components/macro';
import {Col, GridContainer, Row} from '../../shared/grid';
import {LeadTitle} from '../../../styles/fonts';

const PromotionBar = () =>
  <__PromotionBar>
    <GridContainer>
      <Row>
        <Col>
          <__LeadTitle>
            Popular Tiles
          </__LeadTitle>
        </Col>
      </Row>
    </GridContainer>
  </__PromotionBar>

export default PromotionBar;

const __PromotionBar = styled.div`
  background-color: ${props => props.theme.colors.grayDark};
`;

const __LeadTitle = styled(LeadTitle)`
  color: ${props => props.theme.colors.white};
  padding: 0.625rem 0;
`;