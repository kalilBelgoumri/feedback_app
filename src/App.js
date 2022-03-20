import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import FeedBackData from "./data/FeedBackData";
import FeedBackList from "./components/FeedBackList";

function App() {
  const [feedBack, setFeedBack] = useState(FeedBackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedBack={feedBack} />
      </div>
    </>
  );
}

export default App;
