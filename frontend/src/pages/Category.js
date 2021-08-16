import React from "react";

// Apollo
import { useQuery, gql } from "@apollo/client";

// Router
import { useParams, Link } from "react-router-dom";

// Query
const GET_CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      name
      id
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
  }
`;

// Component
const Category = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: { id: id },
  });

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
      <h2>{data.category.name}</h2>
      {data &&
        data.category.reviews &&
        data.category.reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.rating}</div>
            <h2>{review.title}</h2>

            {review.categories.map((cat) => (
              <small key={cat.id}>{cat.name}</small>
            ))}

            <p>{review.body.substring(0, 200)}...</p>
            <Link to={`details/${review.id}`}>Read more</Link>
          </div>
        ))}
    </div>
  );
};

export default Category;
