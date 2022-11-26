# Template for the project

preview - https://template-tilbertbalaban.vercel.app

## React hooks typed with TS

### React query

1. Queries
2. Mutations
3. Query Invalidation

useQueryClient - allows to access query cache and perform actions on it
(refetchOnMount, refetchOnWindowFocus, refetchOnReconnect, refetchInterval)

isLoading or status === 'loading' - The query has no data and is currently fetching
isError or status === 'error' - The query encountered an error
isSuccess or status === 'success' - The query was successful and data is available
isIdle or status === 'idle' - The query is currently disabled
isFetching - In any state, if the query is fetching at any time (including background refetching)

queryKey might be string, array, object and can contain variables

queryFn - function that returns promise, it accepts queryKey as argument

useQueries (accept array of objects { queryKey, queryFn }) - allows to fetch multiple queries at once
(useful for fetching data for multiple pages or for ex. fetching data for multiple tabs/users/products etc.)

third parameter - options object (isIdle === true when enabled === false)
{
enabled: boolean - if false, query will not be executed (useful for chained requests)
retryDelay: number || function (attemptIndex) - delay between retries
retry: number - number of retries
keepPreviousData: boolean - if true, previous data will be available while fetching new data
(useful for pagination to avoid flickering)
}

useInfiniteQuery - for scroll loading or pagination (chunk of data is fetched at once)

_Placeholder Query Data_

## Redux typed with TS

## Redux toolkit

### redux slices (get, post)

## GraphQL (+ Apollo) typed with TS

1. query
2. mutation
3. subscription (websockets)

## Tests

### unit (JEST, Enzyme)

### integration (react testing library)

### storybook + screenshots (loki)

### e2e (WebdriverIO)

- add integration with Google Lighthouse

## scss (mixins, variables etc)

# PWA

(in future - next, vercel, husky)

# Husky

1. install - `npm install husky --save-dev`
2. add the new hook - `npx husky add .husky/pre-commit "npm test"`

# tRPC ?

# Scss, css advanced features

1. Parallax
2. Scroll animation
