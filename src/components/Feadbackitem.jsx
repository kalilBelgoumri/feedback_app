function Feadbackitem({ratings,text}) {

  return (
    <div className="card">
      <div className="num-display"> {ratings} </div>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default Feadbackitem;
