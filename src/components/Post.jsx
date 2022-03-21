import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Post() {
  const navigate = useNavigate();
  const status = 404;

  useEffect(() => {
    if (status === 404) {
      navigate("/notfound");
    }
  },[]);
  return (
    <div>
      <h1>Post </h1>
    </div>
  );
}

export default Post;
