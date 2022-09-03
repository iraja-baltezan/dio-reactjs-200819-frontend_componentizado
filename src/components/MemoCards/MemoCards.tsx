import React, { ComponentProps, PropsWithChildren, useContext, useEffect } from 'react';
import MemoCard, { TMemoCard } from '../MemoCard';
import { GithubContext, IGithubRepoSearchParams, useGithub } from '../../providers/GithubProvider';
import * as S from './styled';

/**
 * Prop types for MemoCard component.
 */
type TMemoCardsProps = {
    matchCount?: number,
    cardSetsCount?: number,
}

/**
 * # MemoCards
 *
 * Renders the card sets.
 *
 * ## Properties of param0
 *
 * * matchCount
 *      * number, default: 2
 *      * Number of cards of same picture that must be found to complete a winning set.
 *
 * * cardSetsCount
 *      * number, default: 2
 *      * Number of sets of cards of the same image.
 *
 * @param param0 TMemoCardsProps
 * @returns React.Component
 */
const MemoCards: React.FC<TMemoCardsProps> = ({ matchCount = 2, cardSetsCount = 2 }) => {
    const { githubState, getUsersFromReposSearch } = useGithub();
    const cardSets: TMemoCard[] = new Array<TMemoCard>(cardSetsCount);

    // console.log(githubState.users)
    useEffect(() => {
        // For unauthenticated requests, the rate limit
        // allows you to make up to 10 requests per minute.
        getUsersFromReposSearch({
            q: undefined,
            per_page: 100,
            page: undefined,
        });
        console.log(githubState.users.length)
    }, [])

    return (
        <S.MemoCards>
            {
                !githubState.loading &&
                (githubState.users.length > 2) &&
                githubState.users.map((user, index) => (
                    // <span key={index}><img src={user.avatarUrl} width={32} /></span>
                    <MemoCard
                        key={index}
                        id={user.id}
                        imgSrc={user.avatarUrl}
                        caption={user.login}
                    />
                ))
            }
        </S.MemoCards>
    )
}

export default MemoCards;