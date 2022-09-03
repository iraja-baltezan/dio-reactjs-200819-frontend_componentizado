import React, { createContext, useCallback, useState } from 'react';
import api from '../../services/api';
import {
    IGithubContext,
    IGithubState,
    IGithubUser,
    IGithubRepoSearchResultItem,
} from '.';
import { IGithubRepoSearchParams } from './types';

const GITHUB_DEFAULT_CONTEXT: IGithubContext = {
    githubState: {
        loading: false,
        users: []
    },
    getUsersFromReposSearch: (query: IGithubRepoSearchParams) => { }
}

export const GithubContext = createContext<IGithubContext>(GITHUB_DEFAULT_CONTEXT);


export default function GithubProvider({ children }: React.PropsWithChildren) {
    const [githubState, setGithubState] = useState<IGithubState>(GITHUB_DEFAULT_CONTEXT.githubState)

    /**
     * Returns the users array filtering out duplicated IDs.
     * @param users Array of IGithubUser
     * @returns
     */
    const getUniqueUsers = (users: IGithubUser[] = []): (IGithubUser | undefined)[] => Array
        .from(
            new Set(
                users.map(user => user.id)
            )
        )
        .map(
            id => users.find(user => user.id === id)
        );

    const getUsersFromReposSearch = ({
        q = 'dio bootcamp',
        page = 1,
        per_page = 30,
    }: IGithubRepoSearchParams) => {

        setGithubState(prevState => ({
            ...prevState,
            loading: !prevState.loading,
            users: [],
        }));

        api
            .get(
                'search/repositories',
                {
                    params: {
                        q: q,
                        page: page,
                        per_page: per_page
                    }
                }
            )
            .then(response => {
                // console.log(response)
                let nextStateUsers: IGithubUser[] =
                    response.data.items.map(
                        ({ owner }: IGithubRepoSearchResultItem): IGithubUser | undefined => {
                            if (owner) return ({
                                id: owner.id,
                                url: owner.url,
                                avatarUrl: owner.avatar_url,
                                htmlUrl: owner.html_url,
                                login: owner.login
                            })
                        }
                    );
                // console.log(1, nextStateUsers.length);
                nextStateUsers = [...githubState.users, ...nextStateUsers];
                nextStateUsers = getUniqueUsers(nextStateUsers) as IGithubUser[];
                console.log(2, nextStateUsers.length);

                setGithubState(prevState => ({
                    ...prevState,
                    users: nextStateUsers,
                }));
            })
            .catch(reason => {
                console.log('Error getting users from repo search:', reason);
            })
            .finally(() => {
                setGithubState(prevState => ({
                    ...prevState,
                    loading: !prevState.loading
                }));
            });
    }

    const contextValue: IGithubContext = {
        githubState,
        getUsersFromReposSearch: useCallback((query: IGithubRepoSearchParams) => getUsersFromReposSearch(query), []),
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
};
