import { useContext } from 'react';
import { GithubContext } from './GithubProvider'
import { IGithubContext } from '.';

const useGithub = () => {
    const { githubState, getUsersFromReposSearch } = useContext<IGithubContext>( GithubContext );
    return { githubState, getUsersFromReposSearch };
}

export default useGithub;