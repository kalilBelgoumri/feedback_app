import Card from "./shared/Card";
import { AiOutlineClose } from "react-icons/ai";

function Feadbackitem({ item,handleDelete }) {


  return (
    <Card>
      <div className="num-display"> {item.rating} </div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <AiOutlineClose color="purple"  />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default Feadbackitem;
