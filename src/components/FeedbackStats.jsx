import React from "react";

function FeedbackStats({ feedBack }) {
  let average = feedBack.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0)/feedBack.length

  console.log(average);

  return (
    <div className="feedback-stats">
      <h4 className="feedback-reviews"> {feedBack.length} Reviews </h4>
      <h4>Average Ratings : {average}</h4>
    </div>
  );
}

export default FeedbackStats;
