import React from "react";

// Graphql
import { useQuery, gql } from "@apollo/client";

// Link
import { Link } from "react-router-dom";

// Query
const GET_REVIEWS = gql`
  query GetReviews {
    reviews {
      title
      body
      rating
      id
    }
  }
`;

// Home
const Homepage = () => {
  // Fetch
  const { loading, data, error } = useQuery(GET_REVIEWS);

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
    <div>
      {data.reviews &&
        data.reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.rating}</div>
            <h2>{review.title}</h2>
            <small>console list</small>
            <p>{review.body.substring(0, 200)}...</p>
            <Link to={`details/${review.id}`}>Read more</Link>
          </div>
        ))}
    </div>
  );
};

export default Homepage;
