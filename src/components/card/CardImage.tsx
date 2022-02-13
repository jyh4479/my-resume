import React, {FunctionComponent} from 'react';
import styled from "styled-components";

// export interface CardImageProps {
//     src?: string;
// }

interface CardImageProps {
    src?: string;
}

const defaultProps: CardImageProps = {
    src: 'images/default.png',
}

const Image = styled.img`
  display: block;
  margin: auto;
`

const CardImage: FunctionComponent<CardImageProps> = props => {
    return (
        <Image src={props.src} alt={'test'}/>
    )
}

CardImage.defaultProps = defaultProps;

export default CardImage;