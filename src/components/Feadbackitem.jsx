import Card from "./shared/Card";

function Feadbackitem({ ratings, text }) {
  return (
    <Card>
      <div className="num-display"> {ratings} </div>
      <div className="text-display">{text}</div>
    </Card>
  );
}

export default Feadbackitem;
