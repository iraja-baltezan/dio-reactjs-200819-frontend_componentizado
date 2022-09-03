import {
    IGithubContext,
    IGithubState,
    IGithubUser,

    IGithubLicenseSimple,
    IGithubMatch,
    IGithubPermissions,
    IGithubRepoSearchParams,
    IGithubRepoSearchResult,
    IGithubRepoSearchResultItem,
    IGithubSearchResultTextMatch,
    IGithubSimpleUser,

} from './types';

import GithubProvider, { GithubContext } from './GithubProvider';
import useGithub from './hooks';

export {
    type IGithubContext,
    type IGithubState,
    type IGithubUser,

    type IGithubLicenseSimple,
    type IGithubMatch,
    type IGithubPermissions,
    type IGithubRepoSearchParams,
    type IGithubRepoSearchResult,
    type IGithubRepoSearchResultItem,
    type IGithubSearchResultTextMatch,
    type IGithubSimpleUser,
};

export default GithubProvider;
export { GithubContext, useGithub };