import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { motion } from "framer-motion";
import { useContext ,useState, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackForm() {
  const { feedbackEdit, addFeedback, updateFeedback } = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [messageRating, setMessageRating] = useState("");

  useEffect(()=>{
    if(feedbackEdit.edit===true){
      setBtnDisabled(false);
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
  
    }

  },[feedbackEdit])

  const handleChangeInput = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("You should type at least 10 characters.");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };
  const hanleSubmit = (e) => {
    e.preventDefault();

  

    if (rating === "" || rating === undefined) {
      setMessageRating("Please choose a number");
    } else {
      const newFeedback = {
        text,
        rating: parseInt(rating),
      };
      if(feedbackEdit.edit===true){
        updateFeedback(feedbackEdit.item.id,newFeedback)
      }else{
        addFeedback(newFeedback);
      }
   

      setBtnDisabled(true);
      setText("");
      setMessageRating("");
      setRating("");
      var ele = document.getElementsByName("rating");
      for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    }
  };
  const hanleSelectRatingNum = (rating) => {
    setRating(rating);
    setMessageRating("");
  };

  return (
    <Card>
      <motion.h2
        animate={{ color: "#ff2994", y: "0px" }}
        initial={{ y: "-200px" }}
        transition={{ delay: 0.2, duration: 0.9, type: "tween" }}
      >
        Haw would you rate your service with us?
      </motion.h2>
      <form onSubmit={hanleSubmit}>
        <RatingSelect
          selectRatingNum={hanleSelectRatingNum}
          messageRating={messageRating}
          rating={rating}
        />
        <div className="input-group">
          <input
            onChange={handleChangeInput}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" version="secondary" isDesabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
