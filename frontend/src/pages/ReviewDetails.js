import { useQuery, gql } from "@apollo/client";
import React from "react";

// Hooks
import { useParams } from "react-router-dom";

// Query
const GET_REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      title
      body
      rating
      id
    }
  }
`;

// Details
const ReviewDetails = () => {
  // Use Params
  const { id } = useParams();

  // Get Single Review
  const { data, error, loading } = useQuery(GET_REVIEW, {
    variables: { id: id },
  });

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
      <div className="rating">{data.review.rating}</div>
      <h2>{data.review.title}</h2>

      <small>console list</small>

      <p>{data.review.body}</p>
    </div>
  );
};

export default ReviewDetails;
