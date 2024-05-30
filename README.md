### Template

This is an event template that will help us take it as a basis.

#### Structure

- app: This directory contains all the app paths
- components: Here we can find the ui directory. This directory will save every shadcn/ui component. The resto of the directories are like modules.
- config: This will contain our apis url
- helpers: Here you can find and create functions that will help us in various parts of our code.
- hooks: This directory have custom hooks in order to reuse some logic.
- lib: This directory will have constants
- locales: This directory will have our traslations
- schema: This directory will have schemas in order to validate our forms
- services: Here you should add every request you need
- store: Some stores are organized in slices, which helps maintain the order of our services

### Technologies used

- [NextJS 14](https://nextjs.org/ 'NextJS 14')
- [zustand](https://zustand-demo.pmnd.rs/ 'zustand')
- [shadcn/ui](https://ui.shadcn.com/ 'shadcn/ui')
- [tanstack query / react query](https://tanstack.com/ 'tanstak query / react query')

### Installation

`git clone git@github.com:we-book/tammy-template.git`

`yarn add
`

`yarn dev`

### Use

#### Add shad-cn components

- In order to add a shadcn/ui component, you can execute the next command:
  `npx shadcn-ui@latest add name-of-component
`
  This command will add our component into ui directory

#### Use react query or tankstack query

TanStack Query (formerly known as React Query) is a library for data management in React applications. Its main goal is to simplify the handling of asynchronous state, such as fetching data from an API, by providing a set of tools that facilitate data fetching, caching, synchronization, and updating.

The functionalities we will use the most:

- Fetching (Data Fetching)
  - TanStack Query makes data fetching easy with hooks like useQuery. This hook accepts a unique query key and a function that performs the data request.
- Caching
  - It caches the responses of requests, which avoids repeated requests and improves performance.
- Mutation
  - It handles write operations (POST, PUT, DELETE) with the useMutation hook, which facilitates updating the client state after a mutation.
- DevTools
  - Provides development tools that allow inspecting the state of queries and mutations.

**Example 1**

```
const setLanguage = useAppConfig((state) => state.setLanguage);
const {
  data,
  error,
  isPending,
  mutate: mutateSendHello,
} = useMutation({
  mutationFn: helloFn,
  onSuccess: (data) => {
    setLanguage(data.ln);
  },
});
```

- **`mutationFn: helloFn`**: **`helloFn`** is the function that performs the mutation. In this case, it is an HTTP request that makes a POST.

- **`onSuccess`**: It is a callback function that executes when the mutation is successful.

  - **`data`**: It is the result returned by helloFn.
  - **` setLanguage(data.ln)`**: Updates the language in the Zustand state using the setLanguage function with the value data.ln received from the mutation response.

**Variables returned by useMutation
**

- **`data`**: Contains the data returned by the mutation, if it was successful.

- **`error`**: Contains the error, if the mutation failed.

- ** `isPending`**: Indicates if the mutation is in progress (equivalent to isLoading in other versions of TanStack Query).

- **`mutate`**: mutateSendHello: It is the function used to initiate the mutation. It can be called with any name and is used to execute the mutation elsewhere in the code.

**Example 2**

```
const { data, isFetching, error, isSuccess } = useQuery({
    queryFn: () => axios.get('https://rickandmortyapi.com/api/character/815'),
    queryKey: ['character']
  })
```

- queryFn:

  - **`queryFn: () => axios.get('https://rickandmortyapi.com/api/character/815')`**: This is the function that executes to fetch the data.

- queryKey: **`queryKey: ['character']`**
  This is a unique key that identifies the query. TanStack Query uses this key to cache the query results and to invalidate or refetch the data when necessary. Here, the key is **`['character']`**, which means this query is simply identified as **`character`**.
