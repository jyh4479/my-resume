import React, {FunctionComponent} from 'react';
import styled from "styled-components";

// export interface CardImageProps {
//     src?: string;
// }

interface CardImageProps {
    src?: string;
}

const defaultProps: CardImageProps = {
    src: ''
}

const CardImage: FunctionComponent<CardImageProps> = props => {
    return (
        <img src={'https://placeimg.com/200/100/any'} alt={'test'}/>
    )
}

export default CardImage;