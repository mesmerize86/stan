import styled from 'styled-components/macro';
import {Heading} from '../../../styles/fonts';

const FallBackImage = ({image, name}) => {
  if (image) {
    return <Image src={image['Poster Art'].url} alt={image.alt}/>
  } else {
    return <__FallBackImage>
      <FallBackImageTitle>
        {name}
      </FallBackImageTitle>
    </__FallBackImage>
  }
}

export default FallBackImage;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const __FallBackImage = styled.div`
  background-color: #121212;
  background-image: url("/assets/images/placeholder.png");
  background-repeat: no-repeat;
  background-position: center;
  color: ${props => props.theme.colors.white};
  height: 185px;
  text-transform: uppercase;
  text-align: center;
  vertical-align: middle;
  height: 185px;
`;

const FallBackImageTitle = styled(Heading)`
  line-height: 185px;
  letter-spacing: -1px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
