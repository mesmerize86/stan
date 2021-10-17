import React from 'react';
import styled from 'styled-components/macro';
import {BodyFont} from '../../../styles/fonts';
import {Link} from 'react-router-dom';
import FallBackImage from './helper';
import { breakpoints } from '../../../styles/breakpoint';

const Tile = ({tileInfo}) => {
  const {title, images, name, path} = tileInfo;
  const hasFallBackImage = !images;
  return (
    <__Tile to={path}>
      {hasFallBackImage ? <FallBackImage name={name}/> : <FallBackImage image={images} name={name}/>}
      <Tile_Title>{title}</Tile_Title>
    </__Tile>
  );
};

export default Tile;

const __Tile = styled(Link)`
  display: block;
  cursor: pointer;
  text-decoration: none;
  height: 215px;
  overflow: hidden;
  @media ${breakpoints.mediumUp} {
    height: 284px;
    overflow: visible;
  }
}

`;

const Tile_Title = styled(BodyFont)`
  margin-top: 0.313rem;
`;