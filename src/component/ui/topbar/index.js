import React from 'react';
import styled from 'styled-components/macro';

import AppTheme from '../../../theme';
import {GridContainer, Row, Col3} from '../../shared/grid';
import {Heading} from '../../../styles/fonts';
import {Button} from '../../shared/button';
import {TextUppercase} from '../../../styles/utilities';
import { breakpoints } from '../../../styles/breakpoint';

const TopBar = () =>
  <__TopBar>
    <GridContainer>
      <Row>
        <Col3>
          <__Heading><TextUppercase>Demo</TextUppercase> Streaming</__Heading>
        </Col3>
        <Col3>
          <Button link href='#'>Log in</Button>
        </Col3>
        <Col3>
          <__FreeTrialButton gray>Start Your Free Trial</__FreeTrialButton>
        </Col3>
      </Row>
    </GridContainer>
  </__TopBar>

export default TopBar;

const __TopBar = styled.div`
  background: ${AppTheme.colors.brand};
  background: linear-gradient(360deg, rgba(2, 0, 36, 1) 0%, rgba(0, 114, 251, 1) 0%, rgba(74, 156, 255, 1) 100%);
  padding: 0.625rem 0;

  ${Col3} {
    &:nth-child(1) {
      width: 60%;
    }
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(3) {
      width: 40%;
      text-align: right;
    }
    @media ${breakpoints.xlargeUp} {
      &:nth-child(1) {
        width: 78%;
      }

      &:nth-child(2) {
        width: 8%;
        display: block;
        text-align: center;
        line-height: 54px;
      }

      &:nth-child(3) {
        width: 14%;
        height: 54px;
        text-align: right;
      }
    }
  }
`;

const __Heading = styled(Heading)`
  color: ${AppTheme.colors.white};
  font-size: ${props => props.theme.fontSize.font_m_lge};
`;

const __FreeTrialButton = styled(Button)`
  padding: 8px;
  @media ${breakpoints.xlargeUp} {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

