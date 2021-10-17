import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components/macro';
import {Col, GridContainer, Row} from '../../component/shared/grid';
import Tile from '../../component/ui/tile';
import {getSeries as getSeriesList} from '../../services/series';
import ErrorMessage from '../../component/shared/error-message';
import IsLoading from '../../component/shared/loading';
import { breakpoints } from '../../styles/breakpoint';

const Series = (props) => {
  const [hasError, setError] = useState(false);
  const [entries, setEntries] = useState([]);
  const { setLoading } = props;
  
  useEffect(() => {
    const getSeries = async () => {
      setLoading(true);
      const response = await getSeriesList();
      if (response !== 404) {
        setEntries(response);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    }
    getSeries();
  }, []);
  
  return (
    <Section fullHeight={hasError}>
      <GridContainer>
        <Row>
          <Col>
            {hasError ? <ErrorMessage message='Oops, something went wrong...'/> :
              <TileWrapper>
                {entries && entries.map(series => <Tile key={series.title} tileInfo={series}/>)
                }
              </TileWrapper>
            }
          </Col>
        </Row>
      </GridContainer>
    </Section>
  );
};

export default IsLoading(Series, 'Loading...');

const Section = styled.div`
  margin: 2.813rem 0 4.063rem;
  
  ${props => props.fullHeight && css`
    margin-bottom: 20rem;
  `}
`;

const TileWrapper = styled.div`
  margin-bottom: 2.813rem;

  &:after {
    content: "";
    visibility: hidden;
    display: block;
    clear: both;
  }

  > a {
    width: 30.3%;
    float: left;
    margin-right: 12px;
    margin-bottom: 1.25rem;

    &:nth-child(3n+3) {
      margin-right: 0;
      @media ${breakpoints.mediumUp} {
        margin-right: 12px;
      }
    }
    
    @media ${breakpoints.mediumUp} {
      width: 140px;
      &:nth-child(5n+5) {
        margin-right: 0;

        @media ${breakpoints.largeUp} {
          margin-right: 12px;
        }
      }
    }
    
    @media ${breakpoints.largeUp} {
      width: 149px;
      &:nth-child(6n+6) {
        margin-right: 0;

        @media ${breakpoints.xlargeUp} {
          margin-right: 12px;
        }
      }
    }

    @media ${breakpoints.xlargeUp} {
      &:nth-child(7n+7) {
        margin-right: 0;
      }
    }
  }
`;