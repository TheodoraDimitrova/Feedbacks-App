import Card from "./shared/Card";
import { FaTimes, FaRegEdit} from "react-icons/fa";
import { motion } from "framer-motion";

import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

export default function FeedbackItem({ feedback }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
      <motion.div
        className="num-display"
        animate={{ rotateY: 360 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        {feedback.rating}
      </motion.div>
      <button className="edit" onClick={() => editFeedback(feedback)}>
        <FaRegEdit />
      </button>

      <button onClick={() => deleteFeedback(feedback.id)} className="close">
        <FaTimes />
      </button>

      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}
