import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function Modal() {
  const { handleDeleteFalse, handleDeleteTrue, popup } =
    useContext(FeedbackContext);

  return (
    popup.show && (
      <div className="backdrop">
        <div className="modal">
          <button onClick={handleDeleteFalse} className="close">
            <FaTimes />
          </button>
          <p>Are you sure</p>
          <button className="btn btn-secondary" onClick={handleDeleteTrue}>
            Confirm
          </button>
        </div>
      </div>
    )
  );
}
