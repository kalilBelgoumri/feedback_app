import React from "react";
import Feadbackitem from "./Feadbackitem";

function FeedBackList({ feedBack,handleDelete }) {
  if (!feedBack || feedBack.length === 0) {
    return <p>No feedBack Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedBack.map((item, index) => (
        <div key={index}>
          <Feadbackitem item={item} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}

export default FeedBackList;
