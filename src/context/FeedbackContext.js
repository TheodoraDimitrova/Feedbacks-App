import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: "1", rating: 8, text: "Feedback 01" },
    { id: "2", rating: 4, text: "Feedback 02" },
    { id: "3", rating: 7, text: "Feedback 03" },
  ]);
  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });
  const [feedbackEdit, setFeedbackEdit] = useState({
    id: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    setPopup({
      show: true,
      id,
    });
  };
  const handleDeleteTrue = () => {
    if (popup.show && popup.id) {
      setFeedback(feedback.filter((item) => item.id !== popup.id));
      setPopup({
        show: false,
        id: null,
      });
    }
  };

  const handleDeleteFalse = () => {
    setPopup({
      show: false,
      id: null,
    });
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      edit: true,
      item,
    });
  };
  const updateFeedback = (id, upItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item))
    );
  };

  return (
    <div>
      <FeedbackContext.Provider
        value={{
          feedback,
          deleteFeedback,
          handleDeleteTrue,
          handleDeleteFalse,
          addFeedback,
          popup,
          editFeedback,
          feedbackEdit,
          updateFeedback,
        }}
      >
        {children}
      </FeedbackContext.Provider>
    </div>
  );
};

export default FeedbackContext;
