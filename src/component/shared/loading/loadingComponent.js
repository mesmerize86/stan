import React from 'react';
import styled from 'styled-components/macro';
import {Col, GridContainer, Row} from '../grid';
import {BodyFont} from '../../../styles/fonts';

const LoadingComponent = ({message}) =>
  <Section>
    <GridContainer>
      <Row>
        <Col>
          <BodyFont>{message}</BodyFont>
        </Col>
      </Row>
    </GridContainer>
  </Section>;

export default LoadingComponent;

const Section = styled.div`
  margin: 2.813rem 0 0;
`;