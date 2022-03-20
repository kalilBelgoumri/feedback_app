import "./App.css";
import { useState } from "react";
import Feadbackitem from "./components/Feadbackitem";
import Header from "./components/Header";
import FeedBackData from './data/FeedBackData';

function App() {
  const [feedBack, setFeedBack] = useState(FeedBackData);
  return (
    <>
      <Header />
      <div className="container">
        <Feadbackitem />
      </div>
    </>
  );
}

export default App;
