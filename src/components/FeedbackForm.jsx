import Card from "./shared/Card";
import { useState } from "react";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Card>
        <form>
          <h2>Quel est la note que vous metriez ? </h2>
          <div className="input-group">
            <input
              value={text}
              onChange={handleTextChange}
              type="text"
              placeholder="White a review"
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm;
