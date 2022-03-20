import React from "react";

function FeedbackStats({ feedBack }) {
  let average =
    feedBack.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedBack.length;

  average=average.toFixed(1).replace(/[.,]0$/,'')

  return (
    <div className="feedback-stats">
      <h4 className="feedback-reviews "> {feedBack.length} Reviews </h4>
      <h4 className="feedback-average">Average Ratings : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
