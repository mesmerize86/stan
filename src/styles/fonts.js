import styled from 'styled-components/macro';
import AppTheme from '../theme';

const Heading = styled.h1`
  font-size: ${AppTheme.fontSize.font_x_lge};
  line-height: 1.5;
  font-weight: normal;
`;

const SubHeading = styled.h2`
  font-size: ${AppTheme.fontSize.font_lge};
  line-height: 1.5;
  font-weight: normal;
`;

const BodyFont = styled.p`
  font-size: ${AppTheme.fontSize.font_body};
  line-height: 1.5;
  font-weight: normal;
  `;

const LeadTitle = styled.h4`
  font-size: ${AppTheme.fontSize.font_lead};
  line-height: 1.5;
  font-weight: normal;
`;

const FinePrint = styled.p`
  font-size: ${AppTheme.fontSize.font_s};
  line-height: 1.5;
  font-weight: normal;
`;

export {
  Heading,
  SubHeading,
  LeadTitle,
  BodyFont,
  FinePrint
}