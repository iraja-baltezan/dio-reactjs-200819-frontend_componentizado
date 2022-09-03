export interface IGithubUser {
    id: number,
    login: string,
    avatarUrl: string,
    url: string,
    htmlUrl: string,
}

export interface IGithubState {
    loading: boolean,
    users: IGithubUser[],
}

export interface IGithubRepoSearchParams {
    q?: string,
    page?: number,
    per_page?: number,
}

export interface IGithubContext {
    githubState: IGithubState,
    getUsersFromReposSearch: (query: IGithubRepoSearchParams) => void,
}


/**
 * Repo Search Result
 */
 export interface IGithubRepoSearchResult {
    incomplete_results: boolean,
    items: IGithubRepoSearchResultItem[],
    total_count: number,
}

/**
 * Repo Search Result Item
 */
export interface IGithubRepoSearchResultItem {
    allow_auto_merge?: boolean;
    allow_forking?: boolean;
    allow_merge_commit?: boolean;
    allow_rebase_merge?: boolean;
    allow_squash_merge?: boolean;
    archive_url: string;
    archived: boolean;
    assignees_url: string;
    blobs_url: string;
    branches_url: string;
    clone_url: string;
    collaborators_url: string;
    comments_url: string;
    commits_url: string;
    compare_url: string;
    contents_url: string;
    contributors_url: string;
    created_at: Date;
    default_branch: string;
    delete_branch_on_merge?: boolean;
    deployments_url: string;
    description: null | string;
    /**
     * Returns whether or not this repository disabled.
     */
    disabled: boolean;
    downloads_url: string;
    events_url: string;
    fork: boolean;
    forks: number;
    forks_count: number;
    forks_url: string;
    full_name: string;
    git_commits_url: string;
    git_refs_url: string;
    git_tags_url: string;
    git_url: string;
    has_downloads: boolean;
    has_issues: boolean;
    has_pages: boolean;
    has_projects: boolean;
    has_wiki: boolean;
    homepage: null | string;
    hooks_url: string;
    html_url: string;
    id: number;
    is_template?: boolean;
    issue_comment_url: string;
    issue_events_url: string;
    issues_url: string;
    keys_url: string;
    labels_url: string;
    language: null | string;
    languages_url: string;
    license: null | IGithubLicenseSimple;
    master_branch?: string;
    merges_url: string;
    milestones_url: string;
    mirror_url: null | string;
    name: string;
    node_id: string;
    notifications_url: string;
    open_issues: number;
    open_issues_count: number;
    owner: null | IGithubSimpleUser;
    permissions?: IGithubPermissions;
    private: boolean;
    pulls_url: string;
    pushed_at: Date;
    releases_url: string;
    score: number;
    size: number;
    ssh_url: string;
    stargazers_count: number;
    stargazers_url: string;
    statuses_url: string;
    subscribers_url: string;
    subscription_url: string;
    svn_url: string;
    tags_url: string;
    teams_url: string;
    temp_clone_token?: string;
    text_matches?: IGithubSearchResultTextMatch[];
    topics?: string[];
    trees_url: string;
    updated_at: Date;
    url: string;
    /**
     * The repository visibility: public, private, or internal.
     */
    visibility?: string;
    watchers: number;
    watchers_count: number;
    web_commit_signoff_required?: boolean;
}

/**
 * License Simple
 */
export interface IGithubLicenseSimple {
    html_url?: string;
    key: string;
    name: string;
    node_id: string;
    spdx_id: null | string;
    url: null | string;
}

/**
 * Simple User
 */
export interface IGithubSimpleUser {
    avatar_url: string;
    email?: null | string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: null | string;
    html_url: string;
    id: number;
    login: string;
    name?: null | string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_at?: string;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
}

export interface IGithubPermissions {
    admin: boolean;
    maintain?: boolean;
    pull: boolean;
    push: boolean;
    triage?: boolean;
}

export interface IGithubSearchResultTextMatch {
    fragment?: string;
    matches?: IGithubMatch[];
    object_type?: null | string;
    object_url?: string;
    property?: string;
}

export interface IGithubMatch {
    indices?: number[];
    text?: string;
}
