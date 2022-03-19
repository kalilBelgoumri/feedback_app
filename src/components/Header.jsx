import React from "react";

function Header({ text,bgColor,textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2> 
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "FeedBack UI",
  textColor:'yellow',
  bgColor:'rgba(0,0,0,0.4)'
};

export default Header;
