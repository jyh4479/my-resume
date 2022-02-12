import React, {FunctionComponent} from 'react';
import styled from "styled-components";

// export interface CardImageProps {
//     src?: string;
// }

interface CardImageProps {
    src?: string;
}

const defaultProps: CardImageProps = {
    src: 'images/default.png'
}

const CardImage: FunctionComponent<CardImageProps> = props => {
    return (
        <img src={props.src} alt={'test'}/>
    )
}

CardImage.defaultProps = defaultProps;

export default CardImage;