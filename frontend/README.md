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

---

- Single Record Query

```
const QUERY_NAME = gql`
    query Name($id: ID!){
        name(id: $id) {
            fields ...
        }
    }
`


const {loading, error, data} = useQuery(QUERY_NAME, {
    variables: {id: id}
})
```

---

#### Making Relational data

- Go to strapi admin panel
- Select contenty type
- Create `category` collection of type text and add 3 fields

---

- Go to content type builder
- Select Review Content type
- Click add another field to this collection
- Select `Relation`
- field name `category`
- Select `Category` from dropdown
- Select type of relation `many to many relation`
- Field name `reviews`

---

- Put each review in a category
- Select Reviews
- Select individual review
- Choose categories for it

---

- Go to settings > roles > public
- select find and findone for category

### Install Dependencies

```
npm i @apollo/client graphql react-markdown
```
