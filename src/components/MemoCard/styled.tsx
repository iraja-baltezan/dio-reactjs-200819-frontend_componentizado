import styled from 'styled-components';
import { IMemoCardFigureProps } from './types';

const Figure = styled.figure<IMemoCardFigureProps>`
position: relative;
width: 10vw;
height: 10vw;
margin: 0;
padding: 0;
transform-style: preserve-3d;
transition: transform 1s;

transform: ${props => (props.flip ? 'rotateY(180deg)' : 'none')};
`

const Img = styled.img`
position: absolute;
backface-visibility: hidden;
width: 100%;
height: 100%;
`

const CommonFace = styled.div`
position: absolute;
backface-visibility: hidden;
width: 100%;
height: 100%;
background-color: silver;
opacity: 0.75;
`

const FigCaption = styled.figcaption`
background-color: blue;
color: white;
max-width: 100%;
`

export {
    Figure,
    Img,
    CommonFace,
    FigCaption,
}
