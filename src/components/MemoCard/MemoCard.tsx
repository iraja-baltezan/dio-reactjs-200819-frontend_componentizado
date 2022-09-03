import React from 'react';
import { TMemoCard } from '.';
import * as S from './styled';

const MemoCard: React.FC<TMemoCard> = ({id, imgSrc, caption }) => {
    return (
        <S.Figure data-id={id}>
            <S.Img src={imgSrc} alt={caption ? caption : 'MemoCard'} />
            <S.CommonFace />
            <S.FigCaption>{caption}</S.FigCaption>
        </S.Figure>
    );
}

export default MemoCard;