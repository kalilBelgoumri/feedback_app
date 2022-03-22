import Card from "./shared/Card";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import FeedbackContext from "../context/FeedbackContext";

function Feadbackitem({ item }) {
  const { deleteFeeback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display"> {item.rating} </div>
      <button onClick={() => deleteFeeback(item.id)} className="close">
        <AiOutlineClose color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default Feadbackitem;
