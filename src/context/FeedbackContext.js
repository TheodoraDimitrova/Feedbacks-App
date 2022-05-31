import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
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

  // useEffect(() => {
  //   fetchFeedback();
  // }, []);

  const fetchFeedback = () => {
    // axios
    //   .get("/feedback")
    //   .then(({ data }) => {
    //     setFeedback(data);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => console.log(error));
  };

  const deleteFeedback = (id) => {
    setPopup({
      show: true,
      id,
    });
  };
  const handleDeleteTrue = () => {

    if (popup.show && popup.id) {
      setFeedback(feedback.filter((item) => item.id !== popup.id));
      // axios
      //   .delete(`/feedback/${popup.id}`)
      //   .then((res) => {
      //     setPopup({
      //       show: false,
      //       id: null,
      //     });
       
          
      //   })
      //   .catch((e) => console.log(e));

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
  //   axios
  //     .post("/feedback", newFeedback)
  //     .then(({data}) => {
  //       //  setFeedback([data,...feedback])
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
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
    // axios
    // .put(`/feedback/${id}`,upItem).then(({data})=>{
    //   setFeedback(
    //     feedback.map((item) => (item.id === id ? data : item))
    //   );
    // }).catch((e)=>console.log(e))
  
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
          isLoading,
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
