import React from "react";

// Hooks
import { useParams } from "react-router-dom";
import useFetch from "./../hooks/useFetch";

// Details
const ReviewDetails = () => {
  // Use Params
  const { id } = useParams();

  // Get Single Review
  const url = `http://localhost:1337/reviews/${id}`;
  const { data, error, loading } = useFetch(url);

  // Loading
  if (loading) {
    return <p>Loading ...</p>;
  }

  // Error
  if (error) {
    return <p>Error !</p>;
  }

  // Return
  return (
    <div className="review-card">
      <div className="rating">{data.rating}</div>
      <h2>{data.title}</h2>

      <small>console list</small>

      <p>{data.body}</p>
    </div>
  );
};

export default ReviewDetails;
