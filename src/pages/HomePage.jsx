

import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";
import Modal from "../components/Modal";

export default function HomePage() {


  return (
    <>
      <Modal />
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </>
  );
}
