import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedBackData from "./data/FeedBackData";
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import Post from "./components/Post";
import Notfound from "./components/Notfound";

function App() {
  const [feedBack, setFeedBack] = useState(FeedBackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback, ...feedBack]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Voulez vous vraiement suprimer ?")) {
      setFeedBack(feedBack.filter((item) => item.id !== id));
    }
  };
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeedbackForm handleAdd={addFeedback} />} />

          <Route path="/" element={<FeedbackStats feedBack={feedBack} />} />
          <Route
            path="/"
            element={
              <FeedBackList feedBack={feedBack} handleDelete={deleteFeedback} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
