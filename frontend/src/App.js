import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import SiteHeader from "./components/SiteHeader";

// Apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// ApolloClient = used to create new connections to GQL server
// InMemoryCache = used by apollo client to cache responses from GQL server
// ApolloProvider = wrapper to use apollo connection

// Pages
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";

// Apollo Client (Create connection)
const client = new ApolloClient({
  uri: `http://localhost:1337/graphql`, // GQL Endpoint
  cache: new InMemoryCache(),
});

// App
function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/details/:id">
              <ReviewDetails />
            </Route>
            <Route path="/category/:id">
              <Category />
            </Route>
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
