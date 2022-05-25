import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let avarage =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Avarage rating: {isNaN(Math.round(avarage)) ? 0 : Math.round(avarage)}
      </h4>
    </div>
  );
}
