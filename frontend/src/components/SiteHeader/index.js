import React from "react";
import { Link } from "react-router-dom";

// Apollo
import { useQuery, gql } from "@apollo/client";

// Query
const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      id
    }
  }
`;

// Component
const SiteHeader = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  // Loading
  if (loading) {
    return <p>Loading ...</p>;
  }

  // Error
  if (error) {
    return <p>Error :(</p>;
  }

  // Return
  return (
    <div className="site-header">
      <Link to="/">
        <h1>Ninja Reviews</h1>
      </Link>
      <nav className="categories">
        <span>Filter reviews by category:</span>
        {data.categories.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SiteHeader;
