import React from "react";

// Hooks
import useFetch from "./../hooks/useFetch";

// Link
import { Link } from "react-router-dom";

// Home
const Homepage = () => {
  // Fetch
  const url = `http://localhost:1337/reviews`;
  const { loading, data, error } = useFetch(url);

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
      {data &&
        data.map((review) => (
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
