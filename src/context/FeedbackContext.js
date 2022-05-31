import { createContext, useState, useEffect } from "react";
import axios from "axios";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });
  const [feedbackEdit, setFeedbackEdit] = useState({
    id: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    axios
      .get("/feedback")
      .then(({ data }) => {
        setFeedback(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const deleteFeedback = (id) => {
    setPopup({
      show: true,
      id,
    });
  };
  const handleDeleteTrue = () => {
    if (popup.show && popup.id) {
      axios
        .delete(`/feedback/${popup.id}`)
        .then((res) => {
          setPopup({
            show: false,
            id: null,
          });
          fetchFeedback()
          
        })
        .catch((e) => console.log(e));
    }
  };

  const handleDeleteFalse = () => {
    setPopup({
      show: false,
      id: null,
    });
  };

  const addFeedback = (newFeedback) => {
    axios
      .post("/feedback", newFeedback)
      .then(({data}) => {
         setFeedback([data,...feedback])
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      edit: true,
      item,
    });
  };
  const updateFeedback = (id, upItem) => {
    axios
    .put(`/feedback/${id}`,upItem).then(({data})=>{
      setFeedback(
        feedback.map((item) => (item.id === id ? data : item))
      );
    }).catch((e)=>console.log(e))
  
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
