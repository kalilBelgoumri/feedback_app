import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import FeedBackData from "./data/FeedBackData";
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedBack, setFeedBack] = useState(FeedBackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Voulez vous vraiement suprimer ?")) {
      setFeedBack(feedBack.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <FeedbackStats feedBack={feedBack} />
      <div className="container">
        <FeedBackList feedBack={feedBack} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
