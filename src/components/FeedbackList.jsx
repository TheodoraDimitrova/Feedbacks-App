import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

export default function FeedbackList({ handleDelete }) {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if ((!feedback || feedback.length === 0) && !isLoading) {
    return <p>No feedback yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: "-1000px" }}
            transition={{ delay: 0.1, duration: 1 }}
          >
            <FeedbackItem key={item.id} feedback={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
