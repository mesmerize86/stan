import React from 'react';
import styled from 'styled-components/macro';
import {GridContainer, Row, Col} from '../../component/shared/grid';
import Tile from '../../component/ui/tile';

const Home = () => {
  const homepageTiles = [{
    name: 'Series',
    title: 'Popular Series',
    path: 'series'
  }, {
    name: 'Movies',
    title: 'Popular Movies',
    path: 'movie'
  }]
  return (
    <Section>
      <GridContainer>
        <Row>
          <Col>
            <TileWrapper>
              {homepageTiles && homepageTiles.map(homepageTile =>
                <Tile key={homepageTile.path} tileInfo={homepageTile}/>
              )
              }
            </TileWrapper>
          </Col>
        </Row>
      </GridContainer>
    </Section>
  );
};

export default Home;

const TileWrapper = styled.div`
  margin-bottom: 4.063rem;

  &:after {
    content: "";
    visibility: hidden;
    display: block;
    clear: both;
  }

  > a {
    width: 145px;
    float: left;
    margin-right: 1.25rem;
    text-decoration: none;
  }
`;

const Section = styled.div`
  margin: 2.813rem 0 4.063rem;
`;
