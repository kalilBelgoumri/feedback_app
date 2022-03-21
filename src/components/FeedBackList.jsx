import { motion, AnimatePresence } from "framer-motion";
import Feadbackitem from "./Feadbackitem";

function FeedBackList({ feedBack, handleDelete }) {
  if (!feedBack || feedBack.length === 0) {
    return <p>No feedBack Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedBack.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Feadbackitem item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     {feedBack.map((item, index) => (
  //       <div key={index}>
  //         <Feadbackitem item={item} handleDelete={handleDelete} />
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default FeedBackList;
