import React from "react";
import Feadbackitem from "./Feadbackitem";

function FeedBackList({ feedBack }) {
  if (!feedBack || feedBack.length === 0) {
    return <p>No feedBack Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedBack.map((item, index) => (
        <div key={index}>
          <Feadbackitem ratings={item.rating} text={item.text} />
        </div>
      ))}
    </div>
  );
}

export default FeedBackList;
