import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setMessage("Votre message doit contenir au moin 10 caractères");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
    }
    setText("");
  };

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>Quel est la note que vous metriez ? </h2>
          <RatingSelect select={(rating) => setRating(rating)} />
          <div className="input-group">
            <input
              value={text}
              onChange={handleTextChange}
              type="text"
              placeholder="Ecrivez votre review ..."
            />
            <Button isDisabled={btnDisabled} version="primary" type="submit">
              Send
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm;
