import React from "react";

// Graphql
import { useQuery, gql } from "@apollo/client";

// Markdown
import ReactMarkdown from "react-markdown";

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
      categories {
        name
        id
      }
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
            {review.categories.map((cat) => (
              <small key={cat.id}>{cat.name}</small>
            ))}
            <ReactMarkdown>{review.body.substring(0, 200)}</ReactMarkdown>
            <Link to={`details/${review.id}`}>Read more</Link>
          </div>
        ))}
    </div>
  );
};

export default Homepage;
