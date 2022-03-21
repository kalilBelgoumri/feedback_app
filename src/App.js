import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import FeedBackData from "./data/FeedBackData";
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedBack, setFeedBack] = useState(FeedBackData);
  
  const addFeedback = (newFeedback) => {
    console.log(newFeedback);
  }
  const deleteFeedback = (id) => {
    if (window.confirm("Voulez vous vraiement suprimer ?")) {
      setFeedBack(feedBack.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd = {addFeedback} />
        <FeedbackStats feedBack={feedBack} />
        <div className="container">
          <FeedBackList feedBack={feedBack} handleDelete={deleteFeedback} />
        </div>
      </div>
    </>
  );
}

export default App;
