### Strapi with GraphQl

#### Go to strapi admin area

- Click Marketplace
- Click Download Graphql (will install graphql plugin on strapi)
- Graphql Schema generated at path (backend/exports/graphql/)

---

#### Graphql playground

- - Go to localhost:1337/graphql
- - Test queries
- Install Dependencies

---

#### Setup Graphql and apollo server

- ApolloClient: used to create new connections to GQL server
- InMemoryCache: used by apollo client to cache responses from GQL server
- ApolloProvider: wrapper to use apollo connection

---

- Import {ApolloClient, InMemoryCache, ApolloProvider}
- create apollo client and set uri and cache
- Wrap app with provider and set client

#### Using Graphql inside App

- useQuery: used to send query to GQL server
- gql: used by apollo to convert query string to format to use

---

- import {useQuery, gql}
- Query
- - const REVIEWS = gql`query here`
- - send query `const {loading, error, data} = useQuery(REVIEWS)`
- - data will be inside `data.reviews`

### Install Dependencies

```
npm i @apollo/client graphql
```
